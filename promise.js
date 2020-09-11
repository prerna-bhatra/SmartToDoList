const doWorkProime=new Promise((resolve,reject)=>
{
	setTimeout(()=>{
		
		reject("things went wrong")
		resolve([7,8,9])
	},2000)
})

doWorkProime.then((result)=>
{
	console.log('success',result)
}).catch((error)=>{
	console.log('Error!',error)
})

//whicever is written first is run 