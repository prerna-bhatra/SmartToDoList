//crud 
const mongodb=require('mongodb')
const Mc=mongodb.MongoClient
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
const mongoose = require('mongoose');
Mc.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
if(error)
{
	console.log("connection failed")
	
}
//console.log("connected")
var db=client.db(databaseName)
/*db.collection('users').insertOne({
	name:'Andrew',
	age:27
},(error,result)=>{
	if (error) {
		console.log("insert error")
	}
	console.log(result.ops)
})*/

//find
/*db.collection('users').findOne({name:'Andrew'},(error,user)=>
{
	if(error)
	{
		return console.log('failed to fetch')
	}
	console.log(user)
})

//find multiple
db.collection('users').find({age:27}).toArray((error,user)=>
{
	if(error)
	{
		return console.log('failed to fetch')
	}
	console.log(user)
})

//count

db.collection('users').find({age:27}).count((error,count)=>
{
	if(error)
	{
		return console.log('failed to fetch')
	}
	console.log(count)
})*/
//upsate to know more visit mongodb operators

	const updatePromise=db.collection('users').updateOne({
	_id:new  mongoose.Types.ObjectId("5ed4c8542a56ef2eaf8c3c3b")

	},{
		$set:{
			name:'prerna'
		}
	})
	updatePromise.then((result)=>{
		console.log(result)

	}).catch((error)=>{
		console.log(error)
	})
})


