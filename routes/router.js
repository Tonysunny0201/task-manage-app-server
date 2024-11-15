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

// view-user-details : http://localhost:3000/view-user-details
// router.get('/view-user-details',jtwMiddlware,userController.viewUserDetailsController)




module.exports = router;