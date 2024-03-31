/**
 * create a mw will check if the request body is proper and correct
 */
const user_model=require("../models/user.model")
const verifySignUpBody= async(req,res,next)=>{
    try{
      // check for the name
      if(!req.body.name){
        return res.status(500).send({
            message:"Failed! Name was not provided in request body"
        })
      }

      //check for the email
      if(!req.body.email){
        return res.status(500).send({
            message:"Failed! Email was not provided in request body"
        })
      }

      //check for the userid
      if(!req.body.userId){
        return res.status(500).send({
            message:"Failed! userid was not provided in request body"
        })
      }

      //check if the user swith the same userid is already present
      const user=await user_model.findOne({userId: req.body.userId})
      if(user){
        return res.status(400).send({
            message:"Failed! user with same userid is already present"
        })
      }
      next()
    }catch(err){
        console.log("Error while validating the request object",err)
        res.status(500).send({
            message:"Error while validating the request body"
        })
    }
}
module.exports={
    verifySignUpBody :verifySignUpBody
}