const express = require('express')
const userController = require('../controller/userController')
const taskController = require('../controller/taskController')
const router = new express.Router()

// register : http://localhost:3000/reg
router.post('/reg',userController.registerController)

// login : http://localhost:3000/login
router.post('/login',userController.loginController)

// add-task : http://localhost:3000/add-task
router.post('/add-task',taskController.addtaskController)

// tasks/:userId : http://localhost:3000/tasks/673726024086cfcae821364e
router.get('/tasks/:userId',taskController.getTasksByUserController)



module.exports = router;