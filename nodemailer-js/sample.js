'use strict'
const express = require('express');
var nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 4569;



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'siva4prathap5.konduru1@gmail.com',
    pass: 'xh4f34g7t4gt64567'
  }
});

var mailOptions = {
  from: 'siva4prathap5.konduru@gmail1.com',
  to: 'gf57e74s47r7@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

app.listen(port,()=>{
	console.log(`server is listening on port ${port}`)
})