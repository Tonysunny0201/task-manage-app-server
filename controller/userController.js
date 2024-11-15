const users = require('../models/userModel')

// register
exports.registerController = async (req,res)=>{
    console.log(req.body);
    const {username,email,password} = req.body
    console.log(username,email,password);
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("You are already registered..")
        }else{

            const newUser = new users({
                username, email, password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        console.log(err);
    }    
}

// login
exports.loginController =async(req,res)=>{
    console.log("inside user login controller");
    const {email,password} =req.body
    console.log(req.body);
    try{
        const existinguser=await users.findOne({email,password})
        if(existinguser){
            res.status(200).json({existinguser})
        }else{
            res.status(404).json("incorrect email or password ")
        }
    }catch(err){c
        console.log(err);
        res.status(401).json(err)
    }
}

// all users list view
// exports.userViewController = async (req,res) => {
//     try{
//         const allUser =await users.find()

//         res.status(200).json(allUser.map(user=>({Firstname:user.firstname, Email:user.email})))
//     }catch(err){
//         console.log(err);
//     }
// }

// view user details 
// exports.viewUserDetailsController = async(req,res)=>{
//     const email =req.body.email
//     try{
//         const userDetails = await users.find({email})
        
//         if(userDetails){
//             res.status(200).json(userDetails.map(details=>({Firstname:details.firstname, lastname:details.lastname, email:details.email, phoneNumber:details.phone})))
//         }else{
//             res.status(404).json("User Not found...")
//         }
//     }catch(err){
//         console.log(err);
//     }
// }