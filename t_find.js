var User = require('./user.js')



function findByOptConditino() {


	var whereStr = {'username': 'develpp'}
	var opt = {'username': 1,'userpwd': 1,'_id': 0} //显示用户名密码不显示其他

	User.find(whereStr, opt, function(err, res) {
		if (err) {
			console.log("error: " + err)
		}else{
			console.log("result: " + res)
		}
	})

}

findByOptConditino()