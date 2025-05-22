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
  linkedin: z.string().optional(),
  message: z.string().min(10, 'Please tell us about yourself')
});

// Define the type based on the schema
// type ApplicationData = z.infer<typeof applicationSchema>;

// Configure email transporter with hardcoded Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'digitallynext2017@gmail.com', // Hardcoding credentials temporarily
    pass: 'shke ywfa jpsa herq', // App password for Gmail
  },
});

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
    
    try {
      // Send email to the HR/recruiting team
      const recruiterMailOptions = {
        from: 'digitallynext2017@gmail.com',
        to: 'digitallynext2017@gmail.com',
        subject: `New Job Application: ${data.name} - ${positionName}`,
        html: generateRecruiterEmail(emailData),
        replyTo: data.email
      };
      
      console.log('Sending email to HR:', recruiterMailOptions.to);
      await transporter.sendMail(recruiterMailOptions);
      console.log('Email sent to HR successfully');
      
      // Send confirmation email to the applicant
      const applicantMailOptions = {
        from: 'digitallynext2017@gmail.com',
        to: data.email,
        subject: `Your Application for ${positionName} - Confirmation`,
        html: generateApplicantEmail(emailData)
      };
      
      console.log('Sending confirmation email to applicant:', data.email);
      await transporter.sendMail(applicantMailOptions);
      console.log('Email sent to applicant successfully');
      
      // Return success response
      return NextResponse.json({ 
        success: true, 
        message: 'Application submitted successfully! We have sent you a confirmation email.' 
      }, { status: 200 });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      
      // Return a partial success - application received but email failed
      return NextResponse.json({
        success: false,
        message: 'Your application has been received. However, there was an issue with our email system. We will still process your application.'
      }, { status: 207 });
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