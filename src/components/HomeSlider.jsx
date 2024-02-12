import Carousel from 'react-bootstrap/Carousel';
import keybord from "../assets/keybord.jpg"
import mouse from "../assets/mouse.jpg"
import mouse2 from "../assets/mousekeybord.jpg"

function HomeSlider() {
  return (
    <Carousel>
      <Carousel.Item>
            <img src={mouse} style={{width:"70%"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={keybord} style={{width:"70%"}}/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={mouse2} style={{width:"70%"}}/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;