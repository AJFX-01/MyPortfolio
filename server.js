const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ajayboyayomikun@gmail.com',
            pass: 'jxekwjbbluymbqjd',
        },
    });

    const mailOptions = {
        from: email,
        to: 'ajayboyayomikun@gmail.com' ,
        
        subject: subject,
        text: ` Message from ${name} with email address ${email} 
        ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            res.json({
                success: false
            });
        } else {
            console.log('Email Sent!!!', info.response);
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
