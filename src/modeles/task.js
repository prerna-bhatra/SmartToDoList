const mongoose=require("mongoose")
const validator=require('validator')

const Task=mongoose.model('Task',
{
	name:
	{
		type:String,
		required:true

	},
	task:
	{
		type:String,
		required:true

	},
	dur:
	{
		type:Date,
		required:true

	},
	desc:
	{
		type:String,
		required:true

	},
  date: {
    type: Date,
    default: Date.now
  }
})

const task=new Task({
	desc:"Learn mongoose",
	comp:false
})

module.exports=Task






