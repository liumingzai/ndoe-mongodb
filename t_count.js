var User = require('./user.js')



function count() {


	var whereStr = {}

	User.count(whereStr, function(err, res) {
		if (err) {
			console.log("error: " + err)
		}else{
			console.log("result: " + res)
		}
	})

}

count()