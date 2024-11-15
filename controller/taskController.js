const tasks =require('../models/taskModel')

// add task
exports.addtaskController = async (req,res)=>{
    console.log("inside addtaskController");
    // const userId = req.userId
    // console.log(userId);
    const {heading,description,startDate,endDate,status,progress,userId} = req.body
    console.log(req.body);
    try{
        const existingProject =await tasks.findOne({userId})
        if(existingProject){
            res.status(406).json("task already exist in our collection... Please upload another!! ")
        }else{
            const newtask = new tasks({
                heading,description,startDate,endDate,status,progress,userId
            })
            await newtask.save()
            res.status(200).json(newtask)
        }
    }catch(err){
        console.log(err);
        
        res.status(401).json(err)
}

}


// Get all tasks for a specific user
exports.getTasksByUserController = async (req, res) => {
    console.log("inside getTasksByUserController");

    const { userId } = req.params
    try {
        const userTasks = await tasks.find({ userId })
        if (userTasks.length > 0) {
            res.status(200).json(userTasks)
        } else {
            res.status(404).json("No tasks found for this user");
        }
    } catch (err) {
        console.log(err);
    }
}
