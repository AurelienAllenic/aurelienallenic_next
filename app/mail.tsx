import nodemailer from 'nodemailer';

export async function sendMail({ name, email, message }) {
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: SMTP_EMAIL,
        to: SMTP_EMAIL, // Vous pouvez mettre une autre adresse email ici
        subject: `New Contact Form Submission from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`
    };

    try {
        await transport.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false };
    }
}
