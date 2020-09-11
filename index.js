const ports = process.env.PORT || 3000;

const User=require('./src/modeles/user')
const Task=require('./src/modeles/task')
const userRouter=require('./src/routers/user')
const taskRouter=require('./src/routers/task')
const express = require('express');
const mongoose = require('mongoose');

const CronJob = require('cron').CronJob;

const {cronf}=require('./src/cronfile')
const app=express()


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


async function main(){
    await cronf();
}
app.get('/', (req, res) => res.send('Hello Board Infinity'))

new CronJob('* * * * * *', function() {
   main();
 }, null, true, 'Asia/Kolkata');



mongoose.connect(
    'mongodb+srv://prerna:Prerna123@cluster0.jokxx.mongodb.net/todolist?retryWrites=true&w=majority', { useNewUrlParser: true }
).then(

    app.listen(ports,  ()=> {
        console.log("Server running at "+ports);
    })
).catch(err => {
    console.log(err);
})
