import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import PRL from './images/prlLogo.jpeg';
import ktuner from './images/KtunerLogo.jpeg';
import Rv6 from './images/Rv6Logo.jpeg';
import Won from './images/Two7wonLogo.jpeg';
import SliderCSS from './CSS/Slider.module.css';
import HybridRacing from './images/hybridRacing.webp'
import Garret from './images/GarretMotion.jpg'
import { Link } from 'react-router-dom';




function Slide() {
  return (
 
    <Carousel  className={SliderCSS.carousel}>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="5000">
      <Link target='_blank' to='https://prlmotorsports.com/?gad_source=1&gclid=Cj0KCQjw6PGxBhCVARIsAIumnWa3IOWj1oKbo69MWzipbxMZvsb4u_C40rkN_5_lRCiLJghlP0MErfIaAulZEALw_wcB'><img src={PRL} text="First slide" alt="prl-logo"  className={SliderCSS.brandImg}/></Link>
        <Carousel.Caption>
          <h3>PRL Motorsports</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="5000"> 
      <Link target='_blank' to='https://rv6-p.com/?gclid=Cj0KCQjw6PGxBhCVARIsAIumnWbS9pJipVbOjKTHu0pYI2gkDFQ_ftN2xBQbVJBzMS9NoDIKQsuwj3UaAqQREALw_wcB'><img src={Rv6} text="First slide" alt="rv6-logo" className={SliderCSS.brandImg}/></Link>
        <Carousel.Caption>
          <h3>Rv6 Performance</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="5000">
      <Link  target='_blank'  to='https://www.27won.com/'><img src={Won} text="First slide" alt="27won-logo" className={SliderCSS.brandImg}/></Link>
        <Carousel.Caption>
          <h3>27WON Performance</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="5000">
      <Link target='_blank' to='https://ktuner.com/'><img src={ktuner} text="First slide" alt="ktuner-logo" className={SliderCSS.brandImg}/></Link>
        <Carousel.Caption>
          <h3>Ktuner</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="5000">
      <Link to='https://www.hybrid-racing.com/' target='_blank'><img src={HybridRacing} text="First slide" alt="hybridracing-logo" className={SliderCSS.brandImg}/></Link>
        <Carousel.Caption>
          <h3>Hybrid Racing</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="5000">
      <Link target='_blank' to='https://www.garrettmotion.com/?_gl=1*mz0gqc*_up*MQ..&gclid=Cj0KCQjw-5y1BhC-ARIsAAM_oKki2W8TYxHNxsTfQZJHesOtjYpSKZcBra9-IvvwRDvZuvtznb3DunAaAlyhEALw_wcB'><img src={Garret} text="First slide" alt="garretmotion-logo" className={SliderCSS.brandImg}/></Link>
        <Carousel.Caption>
          <h3>Garret Motion</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  )
}

export default Slide;