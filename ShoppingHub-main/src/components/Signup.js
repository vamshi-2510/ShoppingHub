import React from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Styles/SignUpStyles.css'
import SignUpImage from '../images/SignUpPage.svg'
const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate()

  const onFormSubmit = (userObj) => {
    axios.post('http://localhost:1000/user/createUser', userObj)
      .then(res => {
        if (res.data.message == "username already exists")
          alert('username already exists ')
        else {
          alert('user created successfully')
          navigate('/Login')
        }
      }
      )
      .catch(err => alert("something went wrong"))
  }

  return (
    <div>
      <div className=" background p-5">
      <img src={SignUpImage} className="img-fluid limg d-none d-sm-block 	d-block mx-auto " alt="image not available" />
      <div className="row mt-5">
        <div className="col-sm-12 col-md-8 col-lg-6 mx-auto p-3">
          <h3 className='text-center fontStyle mb-5'>Sign Up</h3>
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='fontStyle'>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" {...register("username", { required: true })} />
              {errors.username && <p className='text-danger'>*username required</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='fontStyle'>Email </Form.Label>
              <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
              {errors.email && <p className='text-danger'>*email required</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='fontStyle'>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password"  {...register("password", { required: true })} />
              {errors.password && <p className='text-danger'>*password required</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check className='fontStyle' type="checkbox" label="I accept all the terms and conditions" {...register("checkme", { required: true })} />
              {errors.checkme && <p className='text-danger'>*you need to check out</p>}
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup