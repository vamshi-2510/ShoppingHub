import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearData } from '../slices/userSlice';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import '../Styles/Navbar.css'
const NavB = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const MyCart = useSelector(state => state.cart.cartProducts)

  const MyOrders=useSelector(state=>state.orders.ordersData)


  let { userData,
    isPending,
    isFulfilled,
    isRejected,
    isError,
    errMsg, } = useSelector(state => state.users)
  
  
  const userLogout = () => {
    const updateUserCart = async () => {
      let x = "http://localhost:1000/cart/addProductToCart/" + userData.username;
      let result = await axios.post(x, MyCart)
      console.log(result.data)
    }
    const updateUserOrder = async () => {
      let x = "http://localhost:1000/order/addOrder/" + userData.username;
      let result = await axios.post(x, MyOrders)
      console.log(result.data)
    }

    updateUserCart();
    updateUserOrder();
    localStorage.clear();
    dispatch(clearData());
    navigate("/Login");
  };
  return (
    <div >
      {isFulfilled ?
        <Navbar bg='dark' variant="dark "expand="md">
         
            <Navbar.Brand className="MyNavLink">ShoppingHub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className='nav-link MyNavLink' to='/'>Home</NavLink>
                <NavLink className='nav-link MyNavLink' to='/Cart'>Cart</NavLink>
                <NavDropdown
                  title={userData.username}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <NavLink className='nav-link text-dark' to='/MyOrders'>Orders</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                <NavDropdown.Item onClick={userLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
    
        </Navbar> :
        <Navbar bg="dark" variant="dark">
       
          <Navbar.Brand>Shopping Hub</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link " to="/">Home</NavLink>
            <NavLink className="nav-link" to="/Login">Login</NavLink>
            <NavLink className="nav-link" to="/Signup">SignUp</NavLink>
            <NavLink className="nav-link" to="/Contactus">Contactus</NavLink>
          </Nav>
    
      </Navbar>
}
    </div>
  )
}

export default NavB