// handles requests regarding inquiries

const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'pgsender@gmail.com',
    pass: 'pgridsender123',
  },
});

router.post('/', (req, res) => {
    const {email, username, message} = req.body
    const mailOptions = {
        from: email,
        to: 'lydia@gmail.com',
        subject: 'Inquiry from ' + username,
        text: message
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.json({msg: 'try_again'})
        } else {
          console.log('Email sent:', info.response);
          res.json({msg: 'success'})
        }
      });      
})

module.exports = router
