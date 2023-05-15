const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'You must provide the name'],
        maxlength:[20],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const Task = mongoose.model("tasks", TaskSchema)

module.exports = Task;