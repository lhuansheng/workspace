"use strict";
const nodemailer = require("nodemailer");
const fs = require('fs')
const ejs = require('ejs')
const templete = fs.readFileSync('./email.ejs','utf-8')
const html = ejs.compile(templete)
const htmlWithData = html({
  useName: '晓得伐',
  lists:[0,1,2]
})

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host:''
    service: "qq",
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '2524478584@qq.com', // generated ethereal user
      pass: 'pulbxdrtsbpjdjch', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '<2524478584@qq.com>', // sender address
    to: "2524478584@qq.com", // list of receivers
    subject: "Hello ", // Subject line
    text: "Hello world?", // plain text body
    html: htmlWithData, // html body
    // 为了调试样式 我们 html 分开独立出去
  });

  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
