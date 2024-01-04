import styles from'../styles/Aboutusb.module.css';
import creative from '../assets/Brain.png'
import modern from '../assets/Programming.png'
import punctual from '../assets/Love Time.png'
import reliable from '../assets/Helping Hand.png'
import reasonable from '../assets/Dollar Coin.png'

const Aboutusb = () => {
  return ( 
    <div className= {styles.about_us_b}>
      <div className={styles.why_us_horizontal}>
          <p>Why US</p>
      </div>
      <div className= {styles.about_us_fbox}>
        <div className={styles.why_us}>
          <p>Why US</p>
        </div>
        <div className={styles.creative}>
         <img src={creative} alt="creative" className={styles.creative_img}/>
         <p>Creative</p>
        </div>
        <div className={styles.modern}>
          <img src={modern} alt="modern" className={styles.modern_img}/>
          <p>Modern</p>
        </div>
        <div className={styles.punctual}>
          <img src={punctual} alt="punctual" className={styles.punctual_img}/>
          <p>Punctual</p>
        </div>
        <div className={styles.reliable}>
          <img src={reliable} alt="reliable" className={styles.reliable_img}/>
          <p>Reliable</p>
        </div>
        <div className={styles.reasonable}>
          <img src={reasonable} alt="reasonable" className={styles.reasonable_img}/>
          <p>Reasonable</p>
        </div>


      </div>  
    </div>  
   );
}
 
export default Aboutusb;