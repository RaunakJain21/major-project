const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,  // Or 587 for TLS
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    console.log("Sending Email To:", email);
    console.log("Email Title:", title);
    console.log("Email Body:", body);

    let info = await transporter.sendMail({
      from: 'StudyNotion || CodeHelp - by Babbar',
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log("Email sent:", info);
    return info;
  } catch (error) {
    console.log("Error occurred while sending email:", error);
    throw error;
  }
};

module.exports = mailSender;
