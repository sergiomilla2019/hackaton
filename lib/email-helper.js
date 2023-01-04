const nodemailer = require("nodemailer");
const { APP_NAME, BASE_URL } = require("../utils/constants")

async function sendEmail({ to, token }) {
  /*let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });*/

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
    user: 'sergiomilla2019@gmail.com', // generated ethereal user
    pass: 'Requiem2019', // generated ethereal password
    },
  });


  const fullLink = `${BASE_URL}/reset-password?token=${token}`

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"sergiomilla2019@gmail.com" <sergiomilla2019@gmail.com>', // sender address
    to, // list of receivers
    subject: `Forgot Password | ${APP_NAME}`, // Subject line
    html: `Here is your password reset link: <br/><a href="${fullLink}">${fullLink}</a><br/><p>The link is valid for 24h.</p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

const emailHelper = {
  sendEmail
}

export default emailHelper
