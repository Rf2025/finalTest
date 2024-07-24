import Video from './siDriving.mp4'
import HomeCss from './Home.module.css'
import IntroLogo from './silogo.jpeg'
import Slide from './Slider.js'
import Card from './Builds.js'
import { Link } from 'react-router-dom';


function Home(){
    return(
        <div>
            <div className={HomeCss.videoContainer}>
 
 <video className={HomeCss.videoBackground} autoPlay loop muted>
 <source src={Video}></source>
 </video>
</div> 
<section className={HomeCss.aboutSection}>
   <div className={HomeCss.intro}>
   <h1>Our story</h1>
   <img src={IntroLogo} className={HomeCss.aboutImg} alt="si logo"></img>
   <div className={HomeCss.textContainer}>
       <p className={HomeCss.introText}> Here at Everyhthing SI our mission is to empower Honda Civic Si enthusiasts to unlock the full potential of their 10th-generation civics, we provide a comprehensive platform for performance parts and tuning solutions. We are dedicated to guiding our customers on their journey to elevate their driving experience through expertly curated products and personalized support.</p>
       <Link to="/Products">
       <button className={HomeCss.itemButton}>Shop Now</button>
       </Link>
       </div>
   </div>
       
    </section>
    <section className={HomeCss.featuredBrands}>
     <div className={HomeCss.heading4}><h4>Featured Brands</h4></div>
     <Slide/>
    </section>
    <section className={HomeCss.buildSection}>
        <Card/>
    </section>
 </div>
    )
}



export default Home;