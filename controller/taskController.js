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

// get all tasks
exports.getAllTasksController = async (req, res) => {
    console.log("inside getAllTasksController");
    const userId = req.params.userId; 
    try {
        const tasks = await Task.find({ userId: userId }); 
        res.status(200).json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" }); 
    }
};