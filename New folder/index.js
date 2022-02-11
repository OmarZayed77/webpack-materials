const nodeMailer  = require('nodemailer');

const sendEmail = () => {
    const transporter = nodeMailer.createTransport({
        service: 'hotmail',
        secure: false,
        auth: {
            user: 'yasminfathyiti@outlook.com',
            pass: 'Yasmin123'
        }
    });

    transporter.sendMail({
        from: 'yasminfathyiti@outlook.com',
        to: 'hadeeromariti@outlook.com',
        subject: 'Test Email',
        html: '<h1>Hi</h1>'

    }, (err, info) => {
        console.log('error', err);
        console.log('info', info);
    })
}

sendEmail();