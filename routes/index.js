var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chastain Marchildon'});
});
router.get('/projects',indexController.projects);
router.get('/about',indexController.about);
router.get('/contact',indexController.contact);
router.post('/send',(req,res)=>{
  const output = `<p>You have a new message"</p>
                  <h3>Contact Details</h3>
                  <ul>
                    <li>Name: ${req.body.name}</li>
                    <li>Company: ${req.body.company}</li>
                    <li>Email: ${req.body.email}</li>
                    <li>Phone Number: ${req.body.phone}</li>
                  </ul>
                  <h3>Message</h3>
                  <p>${req.body.message}</p>`;

    let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false, //Gmail uses SSL 
                    service:'gmail',
                    auth: {
                        user: 'chastainrgm@gmail.com', 
                        pass: 'hususeyrzagvizjr' // PLEASE DONT STEAL MY EMAIL ACCOUNT ALBY
                    }
                });
            
                // setup email data with unicode symbols
  let mailOptions = {
                    from: '"Portfolio Site" <chastainrgm@gmail.com>', 
                    to: 'chastainrgm@gmail.com', 
                    subject: 'Message from your portfolio site',  
                    html: output // inserts the contact infro and message into the email
                };
            
  transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                    res.render('sent',{
                      title:"Email Confirmed"
                    })
                });
});
module.exports = router;
