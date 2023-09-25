

const express = require('express');
const req
const bodyParser = require('body-parser')
const dotenv= require('dotenv');
const nodemailer  = require('nodemailer');


dotenv.config();

const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/contact', (req, res) => {
    const {name, email, subject, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ajayboyayomikun@gmail.com',
            pass: 'jxekwjbbluymbqjd',
        },
    });

    const mailOptions = {
        from: 'ajayboyayomikun@gmail.com',
        to: email,
        subject : subject,
        text: message
        
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            res.json({
                sucess: false
            });
        } else {
            console.log('Email Sent!!!', info.response);
            res.json({sucess: true});
        }
        express.response.redirect('/contact')
    });
    
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})