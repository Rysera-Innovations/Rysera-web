import styles from "../styles/HeroYehen.module.css"
import styles2 from "../styles/Hero.module.css"
import hero_pic from "../assets/hero_pic.png"
import {Link} from 'react-scroll';

const Hero = () => {
    return ( 
        <div id='Hero' className={styles.hero}>
            <span className={styles2.hero_background_1}>RYSERA INNOVATIONS</span>
            <div className={styles.hero_section}>
              <div className={styles.column1}>
                  <img src={hero_pic} alt="Futuristic plant design" className={styles.hero_pic}/>
              </div>
              <div className={styles.column2}>
                  <div className={styles.col2_head}>Empowering your Business</div>
                  <div className={styles.col2_body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                  <Link to='ContactUs' smooth={true} duration={500}><button className={styles.talk}>Let's Talk</button></Link>
              </div>
            </div>
            <span className={styles2.hero_background_2}>RYSERA INNOVATIONS</span>   
        </div>
     );
}
 
export default Hero;