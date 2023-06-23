import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/coasterphoto1.png';
import image2 from '../images/coasterphoto2.png';
import image3 from '../images/castlephoto.png';

export default function SlideShow() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
