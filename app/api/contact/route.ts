import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize SES Client - ensures AWS credentials flow via process.env automatically
// Requires: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION in .env
const sesClient = new SESClient({ region: process.env.AWS_REGION || 'us-east-1' });

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    // Extract fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const comment = formData.get('comment') as string;
    const consent = formData.get('consent');
    const marketingOptIn = formData.get('marketing_opt_in');
    
    // Basic validation
    if (!name || !email || !phone || !comment || !consent) {
      return NextResponse.json({ error: 'Missing required fields or consent.' }, { status: 400 });
    }

    // Configure the email payload for AWS SES
    const sourceEmail = process.env.SES_SENDER_EMAIL || 'contact@springer.capital';
    const destEmail = process.env.SES_RECEIVER_EMAIL || 'contact@springer.capital';

    const params = {
      Source: sourceEmail,
      Destination: {
        ToAddresses: [destEmail],
      },
      Message: {
        Subject: {
          Data: `[Website Inquiry] New Contact from ${name}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: `
New Inquiry from Springer Capital Website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Marketing Opt-In: ${marketingOptIn ? 'Yes' : 'No'}

Message:
${comment}
            `,
            Charset: 'UTF-8',
          },
          Html: {
            Data: `
              <h2>New Inquiry from Springer Capital Website</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Marketing Opt-In:</strong> ${marketingOptIn ? 'Yes' : 'No'}</p>
              <hr/>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${comment}</p>
            `,
            Charset: 'UTF-8',
          }
        },
      },
      ReplyToAddresses: [email],
    };

    // Dispatch the email
    const command = new SendEmailCommand(params);
    await sesClient.send(command);

    // Redirect to thankyou page on success
    const nextUrl = formData.get('_next') as string || '/thankyou';
    return NextResponse.redirect(new URL(nextUrl, req.url), 303);

  } catch (error) {
    console.error('SES Email Sending Error:', error);
    return NextResponse.json({ error: 'Failed to send message via SES.' }, { status: 500 });
  }
}
