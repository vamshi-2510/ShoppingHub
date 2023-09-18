const exp=require('express')

const productApi=exp.Router()

const expressAsyncHandler=require('express-async-handler')
const { response } = require('express')



productApi.use(exp.json())

//get productsdata
productApi.get('/getProducts',expressAsyncHandler(async(req,res)=>{
    let product=req.app.get('product')
    let products=await product.find().toArray()
    if(products.length==0) {
        res.send({message:"no products found"})
    }
    else{
        res.send({message:"products found",payload:products})
    }
}))

//get products by type 
productApi.get('/getProduct/:type',expressAsyncHandler(async(req,res)=>{
    const name=(req.params.type)
    let product=req.app.get('product')
    let productData=await product.findOne({type:name})
    if(productData==undefined) {
        res.send({message:"no products found"})
    }
    else{
        res.send({message:"products found",payload:productData})
    }
}))

//create user
productApi.post('/createProduct',expressAsyncHandler(async(req,res)=>{
    
    let product=req.app.get('product')
    //extracting user details
    let productObj=req.body
    //checking if user exists 
    let oldProduct=await product.findOne({pid:productObj.pid})
    if(oldProduct!=null){
        res.send({message:'product already exists'})
    }
    else{
        await product.insertOne(productObj)
        res.send({message:"product created successfully"})
    }
}))



//update user 
productApi.put('/updateProduct',expressAsyncHandler(async(req,res)=>{
    let product=req.app.get('product')
    let updatedObj=req.body
    let result=await product.findOne({pid:updatedObj.pid})
    if(result==null){
        res.send({message:"invalid product id"})
    }
    else{
        await product.updateOne({pid:updatedObj.pid},{$set:updatedObj})
        res.send({message:"updated succesfully"})
    }
}))

productApi.delete('/deleteProduct',expressAsyncHandler(async(req,res)=>{
    let product=req.app.get('product')
    let updatedObj=req.body
    let result=await product.findOne({pid:updatedObj.pid})
    if(result==null){
        res.send({message:"invalid username"})
    }
    else{
        await product.deleteOne({pid:updatedObj.pid})
        res.send({message:"deleted succesfully "})
    }
}))
module.exports=productApi