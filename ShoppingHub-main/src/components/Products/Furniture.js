import React from 'react'
import w1 from '../../images/w1.jpg'
import w2 from '../../images/w2.jpg'
import w3 from '../../images/w3.jpg'
import w4 from '../../images/w4.jpg'
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux'
import {addProductToCart} from '../../slices/cartSlice'
import Select from '../Select'
const Furniture = () => {

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
  let materials = [
    {
      id: 1,
      name: "OAK",
      features: "Wooden Couch",
      image: w1,
      price: 7999
    },
    {
      id: 2,
      name: "ROYAL",
      features: "Couch",
      image: w2,
      price: 15999
    },
    {
      id: 3,
      name: "BALENTINA",
      features: "2+3 Sofa Set",
      image: w3,
      price: 19999
    },
    {
      id: 1,
      name: "BAJAA",
      features: "Wooden white table",
      image: w4,
      price: 29999
    }

  ]
  return (
    <div className=""><Select/>
    <div className='row row-cols-sm-1 row-cols-lg-4 row-cols-md-3 mb-5 mt-5'>
      {
        materials.map(ele =>
          <div className='col mb-3'>
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

export default Furniture