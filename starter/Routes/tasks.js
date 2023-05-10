const express = require('express');
const router = express.Router();
const{ getAllTasks,createTask,updateTask,deleteTask,getSingleTasks }= require('../Controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTasks).patch(updateTask).delete(deleteTask)


module.exports = router;