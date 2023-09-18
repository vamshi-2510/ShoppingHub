import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { useEffect,useState } from 'react'
import { setData } from '../slices/productSlice'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {addProductToCart} from '../slices/cartSlice'
import { setCartProducts } from '../slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import Carosal from './carousel'
import ViewProducts from './ViewProducts'
import HomeCards from './HomeCards'
const Home = () => {
  const dispatch=useDispatch()

  const user=useSelector(state=>state.users)
  const products=useSelector(state=>state.products.productsData)
  const navigate=useNavigate()

 


    return (
    <div>
      <Carosal/>
      <HomeCards />  
     

    </div>
  )
}

export default Home