var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'sivaprathap@gmail.com',
        pass: '950308wed12'
    }
});

var mailOptions = {
    from: 'sivaprathap@gmail.com',
    to: 'prathap24@gmail.com, ins@gmail.com',
    subject: 'Hello',
    text: 'Hello world',
    html: '<b>Hello world </b>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: ' + info.response);
    }
    transporter.close();
});