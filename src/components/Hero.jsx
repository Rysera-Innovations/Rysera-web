import styles from "../styles/Hero.module.css";
import hero_pic from "../assets/Hero/hero_pic.webp";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateX(${scrollPosition * 0.1}px)`,
  };
  const parallaxStyleInverse = {
    transform: `translateX(${-scrollPosition * 0.1}px)`,
  };

  return (
    <div id="Hero" className={styles.hero}>
      <span className="parallax-container">
        <span className={styles.hero_overlay_top} style={parallaxStyleInverse}>
          RYSERA INNOVATIONS
        </span>
      </span>
      <div className={styles.hero_section}>
        <div className={styles.img_container}>
          <img
            src={hero_pic}
            alt="Futuristic plant design"
            className={styles.hero_pic}
          />
        </div>
        <div className={styles.content_container}>
          <span className={styles.col2_head}>
            Reimagine your world. We code it to life
          </span>
          <span className={styles.col2_body}>
            Spark your vision, ignite your impact: <br></br>Ryse, Reimagine,
            Repeat!
          </span>
          <Link to="ContactUs" smooth={true} duration={500}>
            <button className={styles.talk}>Let's Talk</button>
          </Link>
          <span className="parallax-container">
            <span className={styles.hero_overlay_bottom} style={parallaxStyle}>
              RYSERA INNOVATIONS
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
