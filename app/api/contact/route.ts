import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');


export async function POST(req: Request) {
  if (req.method === "POST") {

    try {

    const {
      first_name,
      // last_name,
      email,
      // job_title,
      company_name,
      // help,
      // company_size,
      info,
    } = await req.json();




      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user:process.env.NEXT_PUBLIC_ADMIN_EMAIL,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        subject: "Message from customer",
        html: `
                    <h1>Project and Customer</h1>
                    <p>First Name: ${first_name}</p>
                   
                    <p>Email: ${email}</p>
                   
                    <p>Company Name: ${company_name}</p>
                    <p>Info: ${info}</p>
                `,
      };

     

      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json('method not allowed');
  }

}



/** alternative mail options
 * 
 * const mailOptions = {
        from: email,
        to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        subject: "Contact Form Submission",
        html: `
                    <h1>Contact Form</h1>
                    <p>First Name: ${first_name}</p>
                    <p>Last Name: ${last_name}</p>
                    <p>Email: ${email}</p>
                    <p>Job Title: ${job_title}</p>
                    <p>Company Name: ${company_name}</p>
                    <p>Help: ${help}</p>
                    <p>Company Size: ${company_size}</p>
                    <p>Info: ${info}</p>
                `,
      };
 */