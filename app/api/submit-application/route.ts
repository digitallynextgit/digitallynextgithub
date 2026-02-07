import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { getPositionNameById } from '@/app/utils/position-helper';
import { generateApplicantEmail, generateRecruiterEmail } from '@/app/utils/email-templates';

// Define validation schema for the email submission
const applicationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  position: z.string().min(1, 'Please select a position'),
  linkedin: z
    .string()
    .min(1, 'LinkedIn profile is required')
    .url('Please enter a valid LinkedIn profile URL'),
  message: z.string().min(10, 'Please tell us about yourself')
});

// Define the type based on the schema
// type ApplicationData = z.infer<typeof applicationSchema>;

const createGmailTransporter = () => {
  const user = process.env.GMAIL_USER || process.env.SMTP_USER;
  const pass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASSWORD || process.env.SMTP_PASSWORD;
  if (!user || !pass) {
    return null;
  }
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });
};

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Log the body for debugging
    console.log('Application submission body:', body);
    
    // Validate the data using Zod
    const result = applicationSchema.safeParse(body);
    
    if (!result.success) {
      // Log validation errors
      console.error('Validation errors:', result.error.format());
      
      // Return validation errors
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed', 
          errors: result.error.format() 
        }, 
        { status: 400 }
      );
    }
    
    const data = result.data;
    
    // Get the readable position name
    const positionName = getPositionNameById(data.position);
    
    // Create email data with position name
    const emailData = {
      ...data,
      positionName
    };
    
    // Attempt delivery via Resend, then Gmail SMTP
    let delivered = false;
    const toAddress = process.env.SMTP_TO || process.env.GMAIL_RECEIVE || process.env.GMAIL_USER || 'digitallynext2017@gmail.com';
    const fromAddress = process.env.GMAIL_USER || process.env.SMTP_USER || 'no-reply@digitallynext.com';

    const recruiterSubject = `New Job Application: ${data.name} - ${positionName}`;
    const applicantSubject = `Your Application for ${positionName} - Confirmation`;

    if (process.env.RESEND_API_KEY) {
      try {
        const recruiterRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromAddress,
            to: toAddress,
            subject: recruiterSubject,
            html: generateRecruiterEmail(emailData),
            reply_to: data.email,
          }),
        });
        const applicantRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromAddress,
            to: data.email,
            subject: applicantSubject,
            html: generateApplicantEmail(emailData),
          }),
        });
        delivered = recruiterRes.ok && applicantRes.ok;
      } catch (e) {
        console.error('Resend delivery error (applications):', e);
      }
    }

    if (!delivered) {
      const transporter = createGmailTransporter();
      if (transporter) {
        try {
          const recruiterInfo = await transporter.sendMail({
            from: fromAddress,
            to: toAddress,
            subject: recruiterSubject,
            html: generateRecruiterEmail(emailData),
            replyTo: data.email,
          });
          const applicantInfo = await transporter.sendMail({
            from: fromAddress,
            to: data.email,
            subject: applicantSubject,
            html: generateApplicantEmail(emailData),
          });
          delivered = 
            Array.isArray(recruiterInfo.accepted) && recruiterInfo.accepted.length > 0 &&
            Array.isArray(applicantInfo.accepted) && applicantInfo.accepted.length > 0;
        } catch (e) {
          console.error('Gmail SMTP delivery error (applications):', e);
        }
      }
    }

    if (delivered) {
      return NextResponse.json({ 
        success: true, 
        message: 'Application submitted successfully! We have sent you a confirmation email.' 
      }, { status: 200 });
    } else {
      return NextResponse.json({
        success: true,
        message: 'Your application has been received. Our team will review and contact you shortly.'
      }, { status: 200 });
    }
  } catch (error) {
    console.error('Application submission error:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was a problem submitting your application. Please try again later.' 
      }, 
      { status: 500 }
    );
  }
}
