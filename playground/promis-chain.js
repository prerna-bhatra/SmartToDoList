require('../src/db/mongoose')
const User=require('../src/modeles/user')


const updateAgeAndCount=async(id,age)=>
{
	const user=await User.findByIdAndUpdate(id,{ age })
	const count=await User.countDocuments({ age })
	return count
}

updateAgeAndCount('5eea0a49f09d2c1e0da4fa2d',23).then((count)=>
{
	console.log(count)
}).catch((e)=>
{
	console.log(e)
})