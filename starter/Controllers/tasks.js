const Task = require('../Models/task')

//READ
const getAllTasks = async(req,res) =>{
   try {
    const tasks = await Task.find({}) //!Inside find function it takes a filter object if that object is empty it will return all the tasks
    res.status(200).json({tasks})
   } catch (error) {
    res.status(500).json(error)
    
   }
}
const getSingleTasks = async (req,res) =>{
    try {
        const taskId = req.params.id
        const task = await Task.findOne({_id:taskId})
        res.status(200).json({task})

        if(!task)
        {
            res.status(404).json({msg:`No task with id ${taskId}`})
        }
    } catch (error) {
        res.status(500).json(error)
        
    }
   
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

const updateTask = async (req,res) =>{
    try {
        const taskId = req.params.id
        const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true   //!Setting up options is imp 
        })
        res.status(200).json({task})
        if(!task)
        {
            res.status(404).json({msg:`No task with id ${taskId}`})
        }
    } catch (error) {
        res.status(500).json(error)
        
    }
    // res.send("Update a task")
}

//DELETE

const deleteTask = async (req,res) => {
    try {
        const {id:taskId} = req.params;
       const task =  await Task.findOneAndDelete({_id:taskId})
       if(!task)
       {
        res.status(404).json({msg:`No task with id ${taskId}`})

       }
       
    } catch (error) {
        res.status(500).json(error)
        
    }
   
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getSingleTasks
}