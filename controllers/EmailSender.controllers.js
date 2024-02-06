import nodeMailer from 'nodemailer'

const sendEmail = async (req, res) => {

    const { name, number, email, service, message } = req.body

    const transporter = await nodeMailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    const mailOptions = {
        from: '"TechPuri" <no-reply@example.com>',
        to: "souravranjan488@gmail.com, dev.shankarchjena@gmail.com",
        subject: "TechPuri Client Contact",
        text: `Name: ${name} \n Phone: ${number} \n Email: ${email} \n Service: ${service} \n Message: ${message}`,
        replyTo: 'no-reply@example.com',
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return res.status(200).json({
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false
        });
    }
}

export {
    sendEmail
}