const cron = require('node-cron')
const express = require("express")
const Task=require('./modeles/task')
const mongoose=require('./db/mongoose')


var http = require('http');
var https = require('https');
http.globalAgent.maxSockets = 1;
https.globalAgent.maxSockets = 1;






exports.cronf =(req, res, next) => {
	Task.find()
	.then(data => {
		return data
	})
	.then(async response => {
		return await Promise.all(
			response.map(async list => {
				let currentTime = new Date();
				if(currentTime === list.dur || currentTime  > list.dur){
					Task.findByIdAndDelete(list._id)
					.then(response => {
						console.log("Deleted")
					})
				}
			})
		)
	})
}




// function cronf()
// {
// 	const task= Task.find({},{dur:1,_id:1})		
// 	cron.schedule("* * * * *", function() {
//       //console.log("running a task every minute");
//       Task.findByIdAndDelete(task.id)
//     });
// 	//return ("hfh");
// }
// module.exports={cronf}