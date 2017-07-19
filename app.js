var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost:27017/demo'


//写入数据
var insertData = function(db,cb) {
    //连接到表
	var collection = db.collection('liub')
	//插入数据
	var data = [{"name":"scott","age":26},{"name":"tomy","age":29}]

	collection.insert(data,function(err,result) {
		if (err) {
			console.log('error: '+ err)
			return
		}
		cb(result)
	})
}


//查询数据
var selectData = function(db,cb){
    //连接到表
	var collection = db.collection('liub')
	//查询数据
	var whereStr = {"name":"tomy"}
	collection.find(whereStr).toArray(function(err, result) {
		if (err) {
			console.log('error: '+ err)
			return
		}
		cb(result)
	})
}


//更新数据
var updateData =  function(db,cb){
    //连接到表
	var collection = db.collection('liub')
	//查询数据
	var whereStr = {"name":"tomy"}
	var updateStr = {$set: {"age":18}}
	collection.update(whereStr, updateStr, function(err, result) {
		if (err) {
			console.log('error: '+ err)
			return
		}
		cb(result)
	})
}

//删除数据
var delData =  function(db,cb){
    //连接到表
	var collection = db.collection('liub')
	//查询数据
	var whereStr = {"name":"tomy"}
	collection.remove(whereStr, function(err, result) {
		if (err) {
			console.log('error: '+ err)
			return
		}
		cb(result)
	})
}

//存储过程
var invokeProcData =  function(db,cb){
    db.eval('get_liub_count', function(err, result) {
		if (err) {
			console.log('error: '+ err)
			return
		}
		cb(result)
	})
}


MongoClient.connect(DB_CONN_STR, function(err, db) {
	console.log("connect succeed")
	/*insertData(db, function(result) {
		console.log(result)
		db.close()
	})

	selectData(db, function(result) {
		console.log(result)
		db.close()
	})

	updateData(db, function(result) {
		console.log(result)
		db.close()
	})

	delData(db, function(result) {
		console.log(result)
		db.close()
	})*/

	invokeProcData(db, function(result) {
		console.log(result)
		db.close()
	})
})