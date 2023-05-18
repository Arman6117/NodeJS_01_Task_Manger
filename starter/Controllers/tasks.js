const Task = require('../Models/task')
const asyncWrapper = require('../Middlewares/async')
const {customError} = require('../Errors/custom-error')
//READ
const getAllTasks =asyncWrapper( async(req,res,next) =>{
   
    const tasks = await Task.find({}) //!Inside find function it takes a filter object if that object is empty it will return all the tasks
    res.status(200).json({tasks})
   
})
const getSingleTasks = asyncWrapper( async (req,res,next) =>{
    
        const taskId = req.params.id
        const task = await Task.findOne({_id:taskId})
        res.status(200).json({task})

        if(!task)
        {
            return next(customError(`No task with id ${taskId}`, 404))
            
        }
    
   
})

// CREATE 

const createTask =asyncWrapper( async (req,res) =>{
    
        const task = await Task.create(req.body)
    res.status(201).json({task})
   

}
)
//UPDATE

const updateTask = asyncWrapper(async (req,res,next) =>{
    
        const taskId = req.params.id
        const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true   //!Setting up options is imp 
        })
        res.status(200).json({task})
        if(!task)
        {
            return next(customError(`No task with id ${taskId}`, 404))

        }
  
})

//DELETE

const deleteTask = asyncWrapper(async (req,res,next) => {
   
        const {id:taskId} = req.params;
       const task =  await Task.findOneAndDelete({_id:taskId})
       
       if(!task)
       {
        return next(customError(`No task with id ${taskId}`, 404))


       }
   
   
})

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getSingleTasks
}