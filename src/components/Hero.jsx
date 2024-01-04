import styles from "../styles/Hero.module.css"
import hero_pic from "../assets/hero_pic.png"
import {useEffect, useState} from 'react';
import {Link} from 'react-scroll';

const Hero = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle1 = {
    transform: `translateX(${scrollPosition}px)`,
  };
  const parallaxStyle2 = {
    transform: `translateX(${-scrollPosition}px)`,
  };


    return ( 
        <div id='Hero' className={styles.hero}>
            <span className='parallax-container'><span className={styles.hero_background_1}style={parallaxStyle2}>RYSERA INNOVATIONS</span></span>
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
            <span className='parallax-container'><span className={styles.hero_background_2} style={parallaxStyle1}>RYSERA INNOVATIONS</span></span>  
        </div>
     );
}
 
export default Hero;