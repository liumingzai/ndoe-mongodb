var User = require('./user.js')



function del() {


	var whereStr = {'username': 'test'}

	User.remove(whereStr, function(err, result) {
		if (err) {
			console.log("error: " + err)
		}else{
			console.log("result: " +result)
		}
	})

}

del()