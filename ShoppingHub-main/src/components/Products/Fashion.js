import React from 'react'
import f1 from '../../images/f1.jpg'
import f2 from '../../images/f2.jpg'
import f3 from '../../images/f3.jpg'
import f4 from '../../images/f4.jpg'
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux'
import {addProductToCart} from '../../slices/cartSlice'
import Select from '../Select'
const Fashion = () => {

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
  let clothes = [
    {
      id: 1,
      name: "ZARA",
      features: "Pink skirt",
      image: f1,
      price: 1299
    },
    {
      id: 2,
      name: "H & M",
      features: "Hoodie",
      image: f2,
      price: 2999
    },
    {
      id: 3,
      name: "Flying Machine",
      features: "Casual Skirt",
      image: f3,
      price: 1999
    },
    {
      id: 1,
      name: "Levis",
      features: "Denim",
      image: f4,
      price: 2999
    }

  ]
  return (
    <div className="">
      <Select/>
      
    <div className='row row-cols-xs-1 row-cols-sm-1 row-cols-lg-4 row-cols-md-3 mb-5 mt-5'>
      {
        clothes.map(ele =>
          <div className='col mb-3 '>
            <Card className="cardbg productCards">
              <Card.Img variant="top" src={ele.image} />
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

export default Fashion