const exp=require('express')

const orderApi=exp.Router()



const expressAsyncHandler=require('express-async-handler')
const { response } = require('express')



orderApi.use(exp.json())

//get porders Data
orderApi.get('/getOrders',expressAsyncHandler(async(req,res)=>{
    let order=req.app.get('order')
    let orders=await order.find().toArray()
    if(orders.length==0) {
        res.send({message:"no orders found"})
    }
    else{
        res.send({message:"orders found",payload:orders})
    }
}))

//get orders by uername
orderApi.get('/getOrders/:username',expressAsyncHandler(async(req,res)=>{
    const x=(req.params.username)
    let order=req.app.get('order')
    let ordersData=await order.findOne({username:x})
    if(ordersData==undefined) {
        res.send({message:"no orders found"})
    }
    else{
        res.send({message:"orders found",payload:ordersData.myOrders})
    }
}))

//create order
orderApi.post('/addOrder/:username',expressAsyncHandler(async(req,res)=>{
    let x=req.params.username
    let order=req.app.get('order')

    let orderData=req.body

    let userOrders=await order.findOne({username:x})
    if(userOrders==undefined){
        let obj={
            username:x,
            myOrders:orderData
        }
        await order.insertOne(obj)
       res.send("order added to cart successsfully")
    }
    else{
       let obj={
        username:x,
        myOrders:orderData
       }
       await order.updateOne({username:x},{$set:obj})
       res.send({message:"Updated successfully"})
    }
    
}))


module.exports=orderApi