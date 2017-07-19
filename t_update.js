var User = require('./user.js')



function update() {


	var whereStr = {'username': 'admin'}
	var updateStr = {'username': 'root'}

	User.update(whereStr, updateStr, function(err, result) {
		if (err) {
			console.log("error: " + err)
		}else{
			console.log("result: " +result)
		}
	})

}

update()