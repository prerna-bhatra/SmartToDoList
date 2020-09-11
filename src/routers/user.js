const express=require("express")
const router=new express.Router()
const User=require('../modeles/user')
const jwt=require('jsonwebtoken')
/*
dummy
router.get('/test',(req,res)=>
{
	res.send('From a new file')
})
*/

router.post('/users',async(req,res)=>
{
	/*console.log(req.body) //send data from body in postman raw json data {"varname":"val"} and send post request to this route
	res.send("testing")*/
	const user=new User(req.body)
	await user.save()
	try
	{
		await user.save()
		res.status(201).send(user)

	}catch(e)
	{
		res.status(400).send(e)

	}
	/*
	user.save().then(()=>
	{
		res.send(user)
	}).catch((e)=>
	{
		console.log(e)
	})*/
	//send req from postman body to this route
})

router.post('/users/login',async(res,req)=>{
	try
	{
		//userschema in model
		const user=await User.findByCredentials(req.body.email,req.body.password)
		const token=await user.generateAuthToekn()
		res.send({user,token})
	}
	catch (e){
		//res.status(400).send()
		res.send("error")
	}
})

router.get('/users',async(req,res)=>
{
	
	try
	{
		const users=await User.find({})
		res.send({user,token})
	}
	catch(e)
	{
	res.status(500).send()	
	}
/*
	User.find({}).then((users)=>
	{
		res.send(users)
	}).catch((e)=>
	{
		res.status(500).send()
	})*/
})

router.get('/users/:id',async(req,res)=>
{

	const _id=req.params.id

	try
	{
		const  user=await User.findById(_id)
		if(!user)
		{
			return res.status(404).send()
		}
		res.send(user)
	}
	catch(e)
	{
		res.status(500).send()
	}
	/*User.findById(_id).then((user)=>
	{
		if(!user)
		{
			return res.status(404).send()
		}
		res.send(user)
	})
*/

	
})


router.delete('/users/:id',async(req,res)=>
{
	try
	{
		const user=await User.findByIdAndDelete(req.params.id)

		if(!user)
		{
			return res.status(404).send()
		}
		res.send(user)
	}
	catch(e)
	{
		res.status(400).send(e)
	}

})


router.patch('/users/:id',async(req,res)=>
{
	try
	{
		//const user=await User.findById(req.params.id)

		//await user.save()
		const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
		if(!user)
		{
			return res.status(404).send()
		}
		res.send(user)
	}
	catch(e)
	{
		res.status(400).send(e)
	}
})
module.exports=router