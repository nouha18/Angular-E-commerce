require('dotenv').config({ debug: process.env.DEBUG });
var express =  require('express'); //third-part module
var app = express();
var nodemailer = require('nodemailer');
var chalk = require('chalk');
var bodyparser = require('body-parser');
const dotenv = require('dotenv');
const PORT = 8080;
var cors = require('cors');
app.use(cors('*'));
app.use(bodyparser.json());

dotenv.config();
//app.use(express.static(process.cwd()+"/dist/ecommercesite/", { extensions: ['html'] }));
app.use(express.static(process.cwd()+"/dist/ecommercesite/"));
const result = dotenv.config();


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


if (result.error) {
  throw result.error
}


//process.cwd() : give the pull path of dist/index file of deployment
console.log(chalk.red(process.cwd()));

app.get("/", function(req, res){
  // res.send("root");
  res.sendFile(process.cwd()+"/dist/ecommercesite/index.html")
});
app.post("/sendMail", function(req, res){
  var mailOptions2 = {
    from:req.body.email ,
    to: 'nouha.mbarek7@gmail.com',
    subject: req.body.subject,
    text: req.body.message,
    html: `<b>Hey there! </b><br>${req.body.message}`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error){
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

});
app.listen(PORT,function(){
  console.log(chalk.green('server is running with',PORT));
});


