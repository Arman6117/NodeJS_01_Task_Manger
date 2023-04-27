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

   app.get("/api/v1/task")      :-> Get all the tasks 
   app.post("/api/v1/task")     :-> Post a new  task 
   app.patch("/api/v1/task")    :-> Update an existing task 
   app.delete("/api/v1/task")   :-> Delete  an existing task 
*/