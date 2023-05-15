const Task = require('../Models/task')

//READ
const getAllTasks = (req,res) =>{
     res.send("Get my tasks");
}
const getSingleTasks = (req,res) =>{
    res.json({id:req.params.id});
}

// CREATE 

const createTask = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
    res.status(201).json({task})
    } catch (error) {
        res.status(500).json(error)
    }
    

}

//UPDATE

const updateTask = (req,res) =>{
    res.send("Update a task")
}

//DELETE

const deleteTask = (req,res) => {
    res.send("Delete tasks")
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getSingleTasks
}