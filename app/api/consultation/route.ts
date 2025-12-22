import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  city: z.string().min(1, "City/State is required"),
  country: z.string().min(1, "Country is required"),
  company: z.string().min(1, "Company/Organisation is required"),
  designation: z.string().min(1, "Designation is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

// Configure transporter to use Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'digitallynext2017@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'shke ywfa jpsa herq',
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log received data for debugging
    console.log('Received consultation form data:', body);
    
    // Validate form data
    const result = formSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: result.error.format() },
        { status: 400 }
      );
    }
    const validatedData = result.data;

    // Prepare HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #d90429; margin-bottom: 20px;">New Consultation Request</h2>
        
        <div style="margin-bottom: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px;">
          <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${validatedData.name}</p>
          <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${validatedData.email}</p>
          <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${validatedData.phone}</p>
          <p style="margin: 0 0 10px 0;"><strong>City/State:</strong> ${validatedData.city}</p>
          <p style="margin: 0 0 10px 0;"><strong>Country:</strong> ${validatedData.country}</p>
          <p style="margin: 0 0 10px 0;"><strong>Company/Organisation:</strong> ${validatedData.company}</p>
          <p style="margin: 0 0 10px 0;"><strong>Designation:</strong> ${validatedData.designation}</p>
          <p style="margin: 0;"><strong>Service Requested:</strong> ${validatedData.service}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="margin-bottom: 10px; color: #111827;">Message:</h3>
          <div style="padding: 15px; background-color: #f9fafb; border-radius: 8px; white-space: pre-line;">
            ${validatedData.message || 'No message provided'}
          </div>
        </div>
        
        <p style="font-size: 14px; color: #6b7280; margin-top: 30px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 20px;">
          This is an automated message from your website contact form.
        </p>
      </div>
    `;

    // Prepare plain text content
    const textContent = `
      New Consultation Request
      
      Name: ${validatedData.name}
      Email: ${validatedData.email}
      Phone: ${validatedData.phone}
      City/State: ${validatedData.city}
      Country: ${validatedData.country}
      Company/Organisation: ${validatedData.company}
      Designation: ${validatedData.designation}
      Service Interested In: ${validatedData.service}
      Message: ${validatedData.message || 'No message provided'}
    `;

    try {
      await transporter.sendMail({
        from: 'digitallynext2017@gmail.com',
        to: 'digitallynext2017@gmail.com',
        subject: `New Consultation Request: ${validatedData.service}`,
        text: textContent,
        html: htmlContent,
        replyTo: validatedData.email
      });
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Consultation email send failed:', emailError);
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Consultation form error:', error);
    
    return NextResponse.json(
      { success: false, message: 'There was a problem submitting your message. Please try again later.' },
      { status: 500 }
    );
  }
}
