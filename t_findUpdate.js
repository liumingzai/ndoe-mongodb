var User = require('./user.js')



function findByIdAndUpdate() {


	var id = "596ed069ec516510a00dafaa"
	var updateStr = {'userage': 28}

	User.findByIdAndUpdate(id, updateStr, function(err, result) {
		if (err) {
			console.log("error: " + err)
		}else{
			console.log("result: " +result)
		}
	})

}

findByIdAndUpdate()