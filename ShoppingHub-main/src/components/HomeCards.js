import React from 'react'
import Fashion from '../images/FashionAndLifeStyle.jpg'
import Electronics from '../images/Electronics.jpg'
import Furniture from '../images/Furniture.jpg'
import Books from '../images/Books.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/Cards.css'
import { useNavigate } from 'react-router-dom'
const HomeCards = () => {
    const navigate=useNavigate()
    const f1=()=>{
        navigate('/Fashion')
    }
    const f2=()=>{
        navigate('/Electronics')
    }
    const f3=()=>{
        navigate('/Furniture')
    }
    const f4=()=>{
        navigate('/Books')
    }
    return (
        <div className='container mt-5 mb-5 mx-auto'>
            <div className="row row-cols-sm-1 row-cols-lg-4 row-cols-md-3">
                <div className="col ">
                    <Card style={{ width: '18rem' }} className="cardbg">
                        <Card.Img variant="top" src={Fashion} />
                        <Card.Body>
                            <Card.Title>Fashion and LifeStyle</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <button class="btn homeCardButton" onClick={f1} type="button">View</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col  ">
                    <Card style={{ width: '18rem' }}className="cardbg">
                        <Card.Img variant="top" src={Electronics} />
                        <Card.Body>
                            <Card.Title>Electronics</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <button class="btn homeCardButton" onClick={f2}type="button">View</button>                        </Card.Body>
                    </Card>
                </div>
                <div className="col  ">
                    <Card style={{ width: '18rem' }}className="cardbg">
                        <Card.Img variant="top" src={Furniture} />
                        <Card.Body>
                            <Card.Title>Furniture</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <button class="btn homeCardButton" onClick={f3} type="button">View</button>                        </Card.Body>
                    </Card>
                </div>
                <div className="col  ">
                    <Card style={{ width: '18rem' }}className="cardbg">
                        <Card.Img variant="top" src={Books} />
                        <Card.Body>
                            <Card.Title>Books</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <button class="btn homeCardButton" onClick={f4} type="button">View</button>                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default HomeCards