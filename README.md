# todolistfinal (final)

this is a todolist app api made using nodejs and mongodb deployed on heroku with link (https://todoboards.herokuapp.com) this app has 2 main end points 1 https://todoboards.herokuapp.com/list -: this is used to get all the added tasks returnsn in json format 2.https://todoboards.herokuapp.com/add -:this will work on postman to add tasks to add task use post mehtod and values in body { "name":"myname", "task":" taskname", "dur":timeinminutes, "desc":"this is task description" } example

{ "name":"megha", "task":" task 4", "dur":2, "desc":"this is task 4" }

the importnant and tricky part of this app is npm cron i used to delete the task after a specific time for examle if i add a task with 30 minutes on januray 1 at 1 pm then it will delete it at 1:30 pm automatically

i used mongodb atlas for storing collections. i hope your find it useful thanks
