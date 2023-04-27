const express = require("express")
const app = express()


//ROUTES

app.get('/hello', (req,res)=>{
    res.send("Task Manager App");
})





const port = 3000;
app.listen(3000,()=>{console.log(`Server Running on port ${port}...`);})



/*
   ALl the routes we will use in this projects

   app.get("/api/v1/tasks")      :-> Get all the tasks 
   app.post("/api/v1/tasks")     :-> Post a new  task 
   app.patch("/api/v1/tasks")    :-> Update an existing task 
   app.delete("/api/v1/tasks")   :-> Delete  an existing task 
*/