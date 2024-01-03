import styles from "../styles/Footer.module.css";
import { FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo, TwitterLogo } from "@phosphor-icons/react";
import logo from "../assets/rysera-logo.png"

const Footer = () => {

  const size = "clamp(27px, 7.5vw, 33px)";

  return (  
    <div className={styles.footer}>

      <div className={styles.upper_part}>
        <div className={styles.header}>
          Connect
        </div>
        <div className={styles.icon_grid}>
          <div className={styles.grid_corner_section}></div>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/Rysera.innovations" className="facebook"><FacebookLogo size={size} /></a>
            <a href="https://www.instagram.com/rysera.innovations" className="instergram"><InstagramLogo size={size} /></a>
            <a href="https://www.linkedin.com/company/rysera-innovations/"className="linkedin"><LinkedinLogo size={size} /></a>
            <a href="https://www.tiktok.com/@rysera.innovations" className="tiktok"><TiktokLogo size={size} /></a>
            <a href="https://twitter.com/Ryseralk" className="twitter"><TwitterLogo size={size}  /></a>
          </div>
          <div className={styles.grid_corner_section}></div>
        </div>
      </div>

      <div className={styles.lower_part_topics_grid}>
        <div className={styles.grid_corner_section}></div>
        <div className={styles.topics}>
          <div className={styles.head_line}>
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/services">Services</a>
            <a href="/our-team">Our Team</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          
          <div className={styles.logo} >
            <img src={logo}/>
          </div>
          <div className={styles.low_line}>
            <p>2023 Rysera inovations</p>
            <p>All rights reserved</p>
          </div>
        </div>
        <div className={styles.grid_corner_section}></div>
      </div>
    </div>
  );
}
 
export default Footer;