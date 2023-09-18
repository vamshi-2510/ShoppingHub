import Carousel from 'react-bootstrap/Carousel';
import imageOne from '../images/1.jpg'
import imageTwo from '../images/2.jpg'
import imageThree from '../images/3.jpg'
function Carosal() {
  return (
    <Carousel className='mb-5'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={imageOne}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={imageTwo}
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={imageThree}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosal;