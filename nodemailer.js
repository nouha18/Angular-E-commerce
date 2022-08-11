var nodemailer = require('nodemailer');

// create transporter object with smtp server details
const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 25,
  auth: {
    user: '75ac47be8566c5',
    pass: '7a4a6a9f2b99ca'
  }
});
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});
var mailOptions = {
  from: '"Example Team" nouha.mbarek7@gmail.com',
  to: 'nouha.mbarek7@gmail.com, nouha.mbarek7@gmail.com',
  subject: 'Nice Nodemailer test',
  text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
  html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
};
//from : require.body.from
//ctrl + q + / full comments
// var mailOptions2 = {
//   from:'nouha.mbarek7@gmail.com' ,
//   to: require.body.to,
//   subject: require.body.subject,
//   text: requestAnimationFrame.body.text,
//   html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
// };
transporter.sendMail(mailOptions, function(error, info) {
  if (error){
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
