const exp=require('express')

const userApi=exp.Router()

const bcryptjs=require('bcryptjs')

const expressAsyncHandler=require('express-async-handler')
const { response } = require('express')

const jwt=require('jsonwebtoken')

userApi.use(exp.json())

//get userdatap
userApi.get('/getUsers',expressAsyncHandler(async(req,res)=>{
    let user=req.app.get('user')
    let users=await user.find().toArray()
    if(users==undefined) {
        res.send({message:"no users found"})
    }
    else{
        res.send({message:"users found",payload:users})
    }
}))

//get userdata by username 
userApi.get('/getUser/:username',expressAsyncHandler(async(req,res)=>{
    const name=(req.params.username)
    let user=req.app.get('user')
    let userData=await user.findOne({username:name})
    if(userData==undefined) {
        res.send({message:"no user found"})
    }
    else{
        res.send({message:"users found",payload:userData})
    }
}))

//create user
userApi.post('/createUser',expressAsyncHandler(async(req,res)=>{
    
    let user=req.app.get('user')
    //extracting user details
    let newUserObj=req.body
    //checking if user exists 
    let oldUser=await user.findOne({username:newUserObj.username})
    if(oldUser!=null){
        res.send({message:'username already exists'})
    }
    else{
        let hashedPass=await bcryptjs.hash(newUserObj.password,5);
        newUserObj.password=hashedPass;
        await user.insertOne(newUserObj)
        res.send({message:"user created successfully"})
    }
}))


//login user
userApi.post('/loginUser',expressAsyncHandler(async(req,res)=>{
    let user=req.app.get('user')
    let userObj=req.body
    let result=await user.findOne({username:userObj.username})
    if(result==null){
        res.send({message:"invalid username"})
    }
    else{
        
        let check=await bcryptjs.compare(userObj.password,result.password)
        if(check){
                //generating a token 
                let token=jwt.sign({username:userObj.username},'abcd',{expiresIn:30})
                res.send({message:"logged in successfully",payload:token,userObj:result})
        }
        else{
            res.send({message:"invalid password"})
        }
    }
}))

//update user 
userApi.put('/updateUser',expressAsyncHandler(async(req,res)=>{
    let user=req.app.get('user')
    let updatedObj=req.body
    let result=await user.findOne({username:updatedObj.username})
    if(result==null){
        res.send({message:"invalid username"})
    }
    else{
        await user.updateOne({username:updatedObj.username},{$set:updatedObj})
        res.send({message:"updated succesfully"})
    }
}))

userApi.delete('/deleteUser',expressAsyncHandler(async(req,res)=>{
    let user=req.app.get('user')
    let updatedObj=req.body
    let result=await user.findOne({username:updatedObj.username})
    if(result==null){
        res.send({message:"invalid username"})
    }
    else{
        await user.deleteOne({username:updatedObj.username})
        res.send({message:"deleted succesfully "})
    }
}))
module.exports=userApi