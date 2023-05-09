const express = require("express")
const tasks = require('./Routes/tasks')
const app = express()
//MIDDLE WARES
app.use(express.static('public'))
app.use(express.json());

//ROUTES

app.get('/', (req,res)=>{
    res.send("Task Manager App");
})

app.use('/api/v1/tasks',tasks )



const port = 3000;
app.listen(3000,console.log(`Server Running on port ${port}...`))



/*
   ALl the routes we will use in this projects

   app.get("/api/v1/tasks")      :-> Get all the tasks 
   app.post("/api/v1/tasks")     :-> Post a new  task 
   app.get("/api/v1/tasks/:id")  :-> Get a single task
   app.patch("/api/v1/tasks/:id")    :-> Update an existing task 
   app.delete("/api/v1/tasks/:id")   :-> Delete  an existing task 
*/