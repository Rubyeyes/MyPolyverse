var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('express-jwt');
var Food = mongoose.model('Food');
var searchable = require('mongoose-searchable');

/* ========================================================== 
food api
============================================================ */
/* Add or update a food. */
var i = 0;
router.post('/', function(req, res, next) {
	var query = {NDB_No: req.body.NDB_No},
	    update = req.body,
	    options = { upsert: true, new: true, setDefaultsOnInsert: true };

	// Find the document
	Food.findOneAndUpdate(query, update, options, function(error, food) {
	    if (error) return;
	    i++;

	    res.json(food);
	});
});
		

/* GET foods page. */
router.get('/', function(req, res, next) {
	Food.find({})
		.exec(function(err, foods) {
			if(err){return next(err);}
			res.json(foods);}
		);
});


/* Searh foods */
router.get('/search', function(req, res, next) {
	Food.find({'$or':[
					{ "Shrt_Desc": { "$regex": req.query.key_word, "$options": "i" } },
					{ "Shrt_Desc_zh_CN": { "$regex": req.query.key_word, "$options": "i"} } 
					// {Shrt_Desc:new RegExp(req.query.key_word,'i')},
					// {Shrt_Desc_zh_CN:new RegExp(req.query.key_word,'i')}
		]}).exec(function(err,foods) {
			if(err){return next(err);}
			res.json(foods);
	    })


	   
});

module.exports = router;