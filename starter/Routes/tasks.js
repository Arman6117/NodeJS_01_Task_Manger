const express = require('express');
const router = express.Router();
const{ getAllTasks,createTask,updateTask,deleteTask }= require('../Controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(createTask).patch(updateTask).delete(deleteTask)


module.exports = router;