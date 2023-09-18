import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setData } from '../slices/productSlice'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addProductToCart } from '../slices/cartSlice'
import { useNavigate } from 'react-router-dom'
const ViewProducts = () => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.users)
  const products = useSelector(state => state.products.productsData)
  const navigate = useNavigate()

  useEffect(() => {
    const f = async () => {
      let data = await axios.get("http://localhost:1000/product/getProducts")
      dispatch(setData(data.data.payload))

    }
    f();
  }, [])

  const handleAddtoCart =(productObj)=>{
    dispatch(addProductToCart(productObj))
  }
  return (
    <div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {
          products.map((ele, idx) =>
            <Col key={idx}>
              <Card className='bg-light shadow p-1'>
                <Card.Img variant="top" className="rounded w-100 shadow cardImage" src={ele.image} />
                <Card.Body>
                  <Card.Title className="text-center"><b>{ele.pname}</b></Card.Title>
                  <Card.Text><p>{ele.details} </p></Card.Text>
                  <div className="btn btn-info" onClick={()=>handleAddtoCart(ele)}>Add to Cart</div>
                </Card.Body>
              </Card>
            </Col>
          )
        }
      </Row>

    </div>
  )
}

export default ViewProducts