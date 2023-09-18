import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-3 bg-dark text-light pt-3 text-center">
            <div className="col">
                <h6>Get to Know Us</h6>
                <a  href="#" style={{ display: 'block', textDecoration: 'none', color: 'white' }}>About Us</a>
                <a  href="#" style={{ display: 'block', textDecoration: 'none', color: 'white' }}>Careers</a>
            </div>
            <div className="col ">
            <h6>Connect with Us</h6>
                <a href="#" style={{ display: 'block', textDecoration: 'none', color: 'white' }}>Facebook</a>
                <a href="#" style={{ display: 'block', textDecoration: 'none', color: 'white' }}>Twitter</a>
                <a href="#" style={{ display: 'block', textDecoration: 'none', color: 'white' }}>Instagram</a>
            </div>
            <div className="col">
                <h6>Contact us</h6>
                <a  href="#" style={{ display: 'block', textDecoration: 'none', color: 'white' }}>+91 1234567890</a>
                <a href="#" style={{ display: 'block', textDecoration: 'none', color: 'white' }}>Email</a>
                <a href="#" style={{ display: 'block', textDecoration: 'none', color: 'white' }}>amazon@gmail.com</a>
            </div>
        </div>
    </div>
  )
}

export default Footer