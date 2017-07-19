var User = require('./user.js')



function insert() {

	var user = new User({
		username: 'nologin',
		userpwd: 'nologin',
		userage: null,
		logindate: new Date()
	})

	user.save(function(err, result) {
		if (err) {
			console.log("error: " + err)
		}else{
			console.log("result: " +result)
		}
	})

}

insert()