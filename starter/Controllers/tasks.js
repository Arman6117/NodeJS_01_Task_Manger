//READ
const getAllTasks = (req,res) =>{
     res.send("Get my tasks");
}
const getSingleTasks = (req,res) =>{
    res.json({id:req.params.id});
}

// CREATE 

const createTask = (req,res) =>{
    res.json(req.body)
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