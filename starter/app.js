const express = require("express");
const tasks = require("./Routes/tasks");
const app = express();
const connectDB = require("./db/connect");
require('dotenv').config()
//MIDDLE WARES
app.use(express.static("public"));
app.use(express.json());

//ROUTES

app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL,console.log("Connected to mongodb"));
    const port = 3000;
    app.listen(3000, console.log(`Server Running on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start()
/*
   ALl the routes we will use in this projects

   app.get("/api/v1/tasks")      :-> Get all the tasks 
   app.post("/api/v1/tasks")     :-> Post a new  task 
   app.get("/api/v1/tasks/:id")  :-> Get a single task
   app.patch("/api/v1/tasks/:id")    :-> Update an existing task 
   app.delete("/api/v1/tasks/:id")   :-> Delete  an existing task 
*/
