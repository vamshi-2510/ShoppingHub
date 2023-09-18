let {response}=require('express')

const exp=require('express')

const server=exp()

const mclient=require('mongodb').MongoClient;

const path=require('path')
server.use(exp.static(path.join(__dirname,'./build')))

server.use(exp.json())
require('dotenv').config()

const userApi=require('./APIS/userApi')
const productApi=require('./APIS/productApi')
const orderApi=require('./APIS/orderApi')
const cartApi=require('./APIS/cartApi')

const DBurl=process.env.DBURL

mclient.connect(DBurl)
.then((client)=>{
    //getting the database object 
    let dbObj=client.db('amazon')

    //getting the collections object 
    let user=dbObj.collection('usercollection')
    let product =dbObj.collection('productcollection')
    let order =dbObj.collection('ordercollection')
    let cart=dbObj.collection('cartcollection')
    
    //providing apis to children 
    server.set("user",user) 
    server.set("product",product)
    server.set("order",order)
    server.set("cart",cart)
    console.log('connected successfully')
})
.catch(err=>console.log('error :',err))



server.use('/user',userApi)
server.use('/product',productApi)
server.use('/order',orderApi)
server.use('/cart',cartApi)

server.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})

server.use((req,res,next)=>{
    res.send({message:"invalid url",url:`${req.url}`})
})
server.use((err,req,res,next)=>{
    res.send({message:`${err.message}`})})

const PORT=process.env.PORT
server.listen(1000,()=>console.log(`server listening to port ${PORT}....`))
