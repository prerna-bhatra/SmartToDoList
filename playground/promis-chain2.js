require('../src/db/mongoose')
const Task=require('../src/modeles/task')
/* prmis chain
Task.findById('5ef18e144eef351f92ed9db2').then((task)=>
{
	console.log(task)
	return Task.countDocuments({comp:false})
}).then((result)=>
{
	console.log(result)
}).catch((e)=>
{
	console.log(e)
})
*/

//THe outer promis will send the details of by id and inner will send details of comp=false and id=

//async

const deleteTaskAndCount=async(id)=>
{
	const task=await Task.findByIdAndDelete(id)
	const count=await Task.countDocuments({comp:false})
	return count
}

deleteTaskAndCount('5ef18e144eef351f92ed9dbc').then((count)=>
{
	console.log(count)
}).catch((e)=>
{
	console.log(e)
})


