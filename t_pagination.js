var User = require('./user.js')



function pagination() {

	var pageSize = 5
	var currentPage = 1
	var sort = {'logindate': -1}
	var whereStr = {}
    var skipnum = (currentPage - 1) * pageSize

	User.find(whereStr).skip(skipnum).limit(pageSize).sort(sort).exec(function(err, res) {
		if (err) {
			console.log("error: " + err)
		}else{
			console.log("result: " + res)
		}
	})

}

pagination()