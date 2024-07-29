import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import PRL from './images/prlLogo.jpeg';
import ktuner from './images/KtunerLogo.jpeg';
import Rv6 from './images/Rv6Logo.jpeg';
import Won from './images/Two7wonLogo.jpeg';
import SliderCSS from './CSS/Slider.module.css';
import HybridRacing from './images/hybridRacing.webp'
import Garret from './images/GarretMotion.jpg'
function Slide() {
  return (
 
    <Carousel  className={SliderCSS.carousel}>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
        <img src={PRL} text="First slide" alt="prl-logo"  className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>PRL Motorsports</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000"> 
      <img src={Rv6} text="First slide" alt="rv6-logo" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Rv6 Performance</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={Won} text="First slide" alt="27won-logo" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>27WON Performance</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={ktuner} text="First slide" alt="ktuner-logo" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Ktuner</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={HybridRacing} text="First slide" alt="hybridracing-logo" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Hybrid Racing</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={Garret} text="First slide" alt="garretmotion-logo" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Garret Motion</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  )
}

export default Slide;