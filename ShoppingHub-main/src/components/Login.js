import React from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import '../Styles/SignUpStyles.css'
import LoginPage from '../images/LoginPage.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../slices/userSlice';

import { getCartData } from '../slices/cartSlice';
import { getOrdersData } from '../slices/ordersSlice';
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.users)
  const onFormSubmit = (userObj) => {
    dispatch(getUserData(userObj))
    dispatch(getCartData(userObj))
    dispatch(getOrdersData(userObj))
    navigate('/')
  }

  return (
    <div>
      <div className="background p-5">
        <img src={LoginPage} className="img-fluid limg d-none d-sm-block 	d-block mx-auto " alt="image not available" />
        <div className="row mt-5">
          <div className="col-sm-12 col-md-8 col-lg-6 mx-auto p-3">
            <h3 className='text-center fontStyle mb-5'>Login</h3>
            <Form onSubmit={handleSubmit(onFormSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fontStyle'>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" {...register("username", { required: true })} />
                {errors.username && <p className='text-danger'>*username required</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fontStyle'>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password"  {...register("password", { required: true })} />
                {errors.password && <p className='text-danger'>*password required</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className='fontStyle' type="checkbox" label="I accept all the terms and conditions" {...register("checkme", { required: true })} />
                {errors.checkme && <p className='text-danger'>*you need to accept terms and conditions</p>}
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login




