import ktuner from "./images/ktune.avif"
import cobra from './images/Cobra.jpg'
import tune from './images/Stage1.webp'
import buildCss from './CSS/Builds.module.css'
import { Link } from 'react-router-dom';

const card = ()=>{
    return(
    <div className={buildCss.cardContainer}>
        <h4>Redefine your Si</h4>
            <div className={buildCss.resourceSection }>
            <div className={buildCss.cardComponent}>
               <img src={ktuner} alt="" className={buildCss.Resourceimg}></img>
               <h4>KTuner V2.0</h4>
            <h5>Price:$649.00 USD</h5>
            <Link to='/Products'>
            <button className={buildCss.itemButton}>Realiable tunning solutions</button>
            </Link>
        </div>
        <div className={buildCss.cardComponent}>
               <img src={cobra} alt="" className={buildCss.Resourceimg}></img>
               <h4>Cobra Cold Air Intake </h4>
            <h5>Price:$399.99 USD</h5>
            <Link to='/Products'>
            <button className={buildCss.itemButton}>Best selling CAI!</button>
            </Link>
        </div>
        <div className={buildCss.cardComponent}>
               <img src={tune} alt="" className={buildCss.Resourceimg}></img>
               <h4>Stage 1+ Tune</h4>
            <h5>Price:$194.99 USD</h5>
            <Link to='/Products'>
            <button className={buildCss.itemButton}>Best selling tune!</button>
            </Link>
        </div>
        </div>
    </div>
        
    )
}



export default card;