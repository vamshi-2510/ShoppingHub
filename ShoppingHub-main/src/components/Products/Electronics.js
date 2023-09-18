import React from 'react'
import m1 from '../../images/m1.jpg'
import m2 from '../../images/m2.jpg'
import m3 from '../../images/m3.jpg'
import m4 from '../../images/m4.jpg'
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux'
import {addProductToCart} from '../../slices/cartSlice'
import Select from '../Select'
const Electronics = () => {

  const dispatch=useDispatch()
  let { userData,
    isPending,
    isFulfilled,
    isRejected,
    isError,
    errMsg, } = useSelector(state => state.users)

  const handleAddToCart=(ele)=>{
    if(isFulfilled){
      dispatch(addProductToCart(ele))
    alert("product added to cart successfully")
    }
    else{
      alert("You need to login for adding products to CART")
    }
  }
  let mobiles = [
    {
      id: 1,
      name: "Samsung",
      features: "12GB RAM 216GB Internal Memory",
      image: m1,
      price: 29999
    },
    {
      id: 2,
      name: "Oneplus",
      features: "8GB RAM 128GB Internal Memory",
      image: m2,
      price: 39999
    },
    {
      id: 3,
      name: "Vivo",
      features: "6GB RAM 64GB Internal Memory",
      image: m3,
      price: 14999
    },
    {
      id: 1,
      name: "Iphone",
      features: "12GB RAM 216GB Internal Memory",
      image: m4,
      price: 49999
    }

  ]
  return (
    <div><Select/>
    <div className='row row-cols-sm-1 row-cols-lg-4 row-cols-md-3 mb-5 mt-5'>
      {
        mobiles.map(ele =>
          <div className='col mb-3'>
            <Card className="cardbg productCards">
              <Card.Img variant="top" src={ele.image}  className="img-fluid rounded"/>
              <Card.Body>
                <Card.Title>{ele.name}</Card.Title>
                <Card.Text>
                  <p>
                    {ele.features}
                  </p>
                  <h4>{ele.price}</h4>
                </Card.Text>
            
                <button class="btn homeCardButton mx-auto " onClick={()=>handleAddToCart(ele)} type="button">Add to Cart</button>
            
              </Card.Body>
            </Card>
          </div>
        )
      }
      <br/>
      <br/>
      <br/>
    </div>
    </div>
  )
}

export default Electronics