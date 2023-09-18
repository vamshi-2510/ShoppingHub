const exp=require('express')

const cartApi=exp.Router()



const expressAsyncHandler=require('express-async-handler')
const { response } = require('express')




cartApi.use(exp.json())

//get porders Data
cartApi.get('/getCartProducts',expressAsyncHandler(async(req,res)=>{
    let cart=req.app.get('cart')
    let products=await cart.find().toArray()
    if(products.length==0) {
        res.send({message:"no orders found"})
    }
    else{
        res.send({message:"orders found",payload:products})
    }
}))

//get orders by uername
cartApi.get('/getCartProducts/:username',expressAsyncHandler(async(req,res)=>{
    const x=(req.params.username)
    let cart=req.app.get('cart')
    let cartProductsData=await cart.findOne({username:x})
    if(cartProductsData==undefined) {
        res.send({message:"no products found in cart"})
    }
    else{
        res.send({message:"products found",payload:cartProductsData.myCart})
    }
}))

//create order
cartApi.post('/addProductToCart/:username',expressAsyncHandler(async(req,res)=>{
    let x=req.params.username
    let cart=req.app.get('cart')

    let productData=req.body

    let userCart=await cart.findOne({username:x})
    (userCart)
    if(userCart==undefined){
        let obj={
            username:x,
            myCart:productData
        }
        await cart.insertOne(obj)
        res.send("products added to cart successsfully")
    }
    else{
       let obj={
        username:x,
        myCart:productData
       }
       await cart.updateOne({username:x},{$set:obj})
       res.send({message:"Updated successfully"})
    }
    
}))




cartApi.post('/deleteProduct/:username',expressAsyncHandler(async(req,res)=>{
    let cart=req.app.get('cart')
    let x=(req.params.username) 
    let Obj=req.body
    let result=await cart.findOne({username:x})
    let products=result.myCart
    let p=-1
    for(let i=0;i<products.length;i++){
        if(products[i].pid===Obj.pid){
            p=i;
            break;
        }
    }
    if(p==-1){
        res.send({message:"invalid product"})
    }
    else{
        products.splice(p,1)
        let Obj={
            username:result.username,
            myCart:products
        }
        await cart.updateOne({username:x},{$set:Obj})
        res.send({message:"product deleted succesfully "})
    }
}))
module.exports=cartApi