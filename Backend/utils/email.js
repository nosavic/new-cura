const nodeMailer = require('nodemailer');
require("dotenv").config();

//send email function
const sendEmail = async (options) => {
  // create a transporter responsible for sending the email (mailtrap)
const transporter = nodeMailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  // define email options
  const mailOptions = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  // send email while passing the options
  await transporter.sendMail(mailOptions);
};

//export
module.exports = sendEmail;
