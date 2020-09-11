const mongoose=require("mongoose")
const validator=require('validator')
mongoose.connect('mongodb+srv://prerna:Prerna123@cluster0.jokxx.mongodb.net/todolist?retryWrites=true&w=majority',{
	useUnifiedTopology:true ,
	useNewUrlParser:true,
	useCreateIndex:true
})




