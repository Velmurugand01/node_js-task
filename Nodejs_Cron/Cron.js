
const express=require('express')
const app=express()
const cron = require('node-cron');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ' unluckyboysam5@gmail.com ',
    pass: 'bbdf bsun qyuv pjjm'
  }
});




cron.schedule('42 13 * * *', () => {
 
  const mailOptions = {
    from: 'unluckyboysam5@gmail.com ',
    to: 'velmurugand309@gmail.com',
    subject: 'Notification',
    text: 'This is a notification email.'
  };

 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred:', error);
    } else {
      console.log('Email sent:', info.response);
      console.log(info);
    }
  });
});


app.listen(1000,()=>{
    console.log("server is running port :1000");
})