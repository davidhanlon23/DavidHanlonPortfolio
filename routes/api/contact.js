const express = require("express");
const mongo = require('mongodb');
const router = express.Router();
const path = require('path');
const nodeMailer = require('nodemailer');
const Contact = require("../../models/Contact");

router.post('/contactus', (req, res) => {
    console.log(req.body);
    const newReq = new Contact(req.body);

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'noreply.reviewme@gmail.com',
            pass: '$Cosc412ReviewMe$'
        }
    });
    let mailOptions = {
        from: '"David Hanlon Contact Form" <'+req.body.email+'>',
        to: 'davidhanlon23@gmail.com',
        subject: "New Message from the Contact Form",
        //text: 'From: '+req.body.email+' Phone#: '+req.body.phone+' Message: ' +req.body.help//,
        html: `<ul><li><p>From: </p>${req.body.email}</li><li><p>Phone#: </p> ${req.body.phone}</li><li><p>Message: </p> ${req.body.help}</li></ul>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

    newReq.save()
        .then(doc => res.status(200).redirect('/thankyou'))
        .catch(err => res.status(500).send(err));
  });
  
  module.exports = router;
