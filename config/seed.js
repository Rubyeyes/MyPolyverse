var mongoose = require('mongoose');

var User = mongoose.model('User');
var Food = mongoose.model('Food');

User.remove({}, function(err) {
	if (err) {
	} else {
		var user1 = new User();
		user1.username = 'Test User';
		user1.email = 'test@example.com';
		user1.role = 'user';
		user1.setPassword('test');
		user1.save(function(err) {
			if(err){return next(err);}
		});

		// var user2 = new User();
		// user2.username = 'Alan';
		// user2.email = 'catian315@gmail.com';
		// user2.role = 'user';
		// user2.setPassword('test');
		// user2.save(function(err) {
		// 	if(err){return next(err);}
		// });

		var admin = new User();
		admin.username =  'Admin';
		admin.email = 'admin@example.com';
		admin.role = 'admin';
		admin.setPassword('admin');
		admin.save(function(err) {
			if(err){return next(err);}
		});
	}
});

