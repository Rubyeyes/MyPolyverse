var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('express-jwt');
var User = mongoose.model('User');
var nodemailer = require('nodemailer');

//middleware to authenticate jwt tokens
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});
// import environment configuration
var config = require('../config/environment/development');

/* ========================================================== 
email api
============================================================ */
router.post('/', function(req, res, next) {

if(config.mode === "dev") {

	var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'happysimbanala@gmail.com', // Your email id
            pass: 'sn900429' // Your password
        }
    });

    var mailOptions = {
	    from: '"Bibier" <happysimbanala@gmail.com>', // sender address
	    to: 'catian315@gmail.com, tianchangan@hotmail.com', // list of receivers
	    subject: req.body.subject, // Subject line
	    html: req.body.content //, // plaintext body
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.json({yo: 'error'});
	    }else{
	        console.log('Message sent: ' + info.response);
	        res.json({yo: info.response});
	    };
	});
} else if(config.mode = "product") {

}
	

});

module.exports = router;