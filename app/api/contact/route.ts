import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Your SendGrid API key should be in an environment variable
// For development, you can add it to .env.local
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

export async function POST(req: NextRequest) {
  console.log('API route hit: /api/contact');
  
  try {
    // Log request body
    const body = await req.json();
    console.log('Request body:', JSON.stringify(body, null, 2));
    
    // Ensure SendGrid API key is available
    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key is missing');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }
    
    console.log('SendGrid API key is present');

    // Initialize SendGrid
    sgMail.setApiKey(SENDGRID_API_KEY);

    // Parse the request body
    const { name, email, phone, company, message, formType } = body;

    // Validate required fields
    if (!name || !email) {
      console.error('Missing required fields:', { name, email });
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Prepare email content
    const msg = {
      to: 'jonny@wemarketfence.com', // Updated recipient email
      from: 'onboarding@wemarketfence.com', // Using verified sender email
      subject: `New ${formType || 'Contact Form'} Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        Message: ${message || 'No message'}
        Submitted at: ${new Date().toLocaleString()}
        Form Type: ${formType || 'Contact Form'}
      `,
      html: `
        <h2>New Form Submission from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Form Type:</strong> ${formType || 'Contact Form'}</p>
      `,
    };

    console.log('Sending email with SendGrid:', msg);
    
    // Send email
    await sgMail.send(msg);
    console.log('Email sent successfully');
    
    // Return success response
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('SendGrid API error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
