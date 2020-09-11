const express=require("express")
const router=new express.Router()
const Task=require('../modeles/task')
router.get('/list',async(req,res)=>
{
	try
	{
		const task=await Task.find({})
		res.send(task)
	}
	catch(e)
	{
	res.status(500).send()	
	}


/*	Task.find({}).then((tasks)=>
	{
		res.send(tasks)
	}).catch((e)=>
	{
		res.status(500).send()
	})*/
})

router.get('/tasks/:id',async(req,res)=>
{

	const _id=req.params.id
	try
	{
		const  task=await Task.findById(_id)
		if(!task)
		{
			return res.status(404).send()
		}
		res.send(task)
	}
	catch(e)
	{
		res.status(500).send()
	}

	/*Task.findById(_id).then((task)=>
	{
		if(!task)
		{
			return res.status(404).send()
		}
		res.send(task)
	})*/
})

router.post('/add',async(req,res)=>
{
	/*console.log(req.body) //send data from body in postman raw json data {"varname":"val"} and send post request to this route
	res.send("testing")*/
	//const task=new Task(req.body);
	const name = req.body.name;
	const desc = req.body.desc;
	const task = req.body.task;
	var date = new Date();
	const time = req.body.dur;
    const dur = date.setMinutes( date.getMinutes() + time );
       

    const list = new Task({
    	name:name,
    	desc:desc,
    	task:task,
    	dur:dur
    })

	list.save()
	.then(result => {
		res.status(200).json({
			data:result
		})
	})
	.catch(err => {
		console.log(err);
		res.json({
			message:err
		})
	})
	
	/*task.save().then(()=>
	{
		res.send(task)
	}).catch((e)=>
	{
		console.log(e)
	})*/
	//send req from postman body to this route
})



router.patch('/tasks/:id',async(req,res)=>
{
	try
	{
		const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
		if(!task)
		{
			return res.status(404).send()
		}
		res.send(task)
	}
	catch(e)
	{
		res.status(400).send(e)
	}
})


router.delete('/tasks/:id',async(req,res)=>
{
	try
	{
		const task=await Task.findByIdAndDelete(req.params.id)
		
		if(!task)
		{
			return res.status(404).send()
		}
		res.send(task)
	}
	catch(e)
	{
		res.status(400).send(e)
	}

})




module.exports=router