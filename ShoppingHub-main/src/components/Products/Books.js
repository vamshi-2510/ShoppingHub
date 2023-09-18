import React from 'react'
import b1 from '../../images/b1.jpg'
import b2 from '../../images/b2.jpg'
import b3 from '../../images/b3.jpg'
import b4 from '../../images/b4.jpg'
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux'
import {addProductToCart} from '../../slices/cartSlice'
import Select from '../Select'
const Books = () => {

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
  let books = [
    {
      id: 1,
      name: "ClassMate",
      features: "Quantity 10",
      image: b1,
      price: 499
    },
    {
      id: 2,
      name: "Notbook",
      features: "Quantity 10",
      image: b2,
      price:399
    },
    {
      id: 3,
      name: "Champion",
      features: "5",
      image: b3,
      price: 399
    },
    {
      id: 4,
      name: "Nirmala",
      features: "Quantity 20",
      image: b4,
      price: 499
    }

  ]
  return (
    <div className=""><Select/>
    <div className='row row-cols-sm-1 row-cols-lg-4 row-cols-md-3 mb-5 mt-5'>
      {
        books.map(ele =>
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

export default Books