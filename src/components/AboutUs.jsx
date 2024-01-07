import styles from "../styles/AboutUs.module.css";
import phone from "../assets/AboutUs/phone.webp";
import creative from "../assets/AboutUs/Brain.webp";
import modern from "../assets/AboutUs/Programming.webp";
import punctual from "../assets/AboutUs/Love Time.webp";
import reliable from "../assets/AboutUs/Helping Hand.webp";
import reasonable from "../assets/AboutUs/Dollar Coin.webp";

const AboutUs = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left_side}>
          <div className={styles.content_container}>
            <div className={styles.title}>About US</div>
            <div className={styles.description}>
              Welcome to Rysera, where innovation meets expertise! We are a
              dynamic team of dedicated engineers and designers who thrive on
              transforming your boldest ideas into reality. Our mantra, "Ryse,
              Reimagine, Repeat!" encapsulates the journey of innovation, where
              we Ryse to the occasion, Reimagine what's possible, and Repeat the
              cycle of excellence.
            </div>
          </div>
        </div>

        <div className={styles.right_side}>
          <img className={styles.phone} src={phone} />
        </div>
      </div>
      <div className={styles.about_us_b}>
        <span className={styles.why_us_horizontal}>Why Us</span>
        <div className={styles.about_us_fbox}>
          <div className={styles.why_us}>
            <p>Why US</p>
          </div>
          <div className={styles.creative}>
            <img
              src={creative}
              alt="creative"
              className={styles.creative_img}
            />
            <p>Creative</p>
          </div>
          <div className={styles.modern}>
            <img src={modern} alt="modern" className={styles.modern_img} />
            <p>Modern</p>
          </div>
          <div className={styles.punctual}>
            <img
              src={punctual}
              alt="punctual"
              className={styles.punctual_img}
            />
            <p>Punctual</p>
          </div>
          <div className={styles.reliable}>
            <img
              src={reliable}
              alt="reliable"
              className={styles.reliable_img}
            />
            <p>Reliable</p>
          </div>
          <div className={styles.reasonable}>
            <img
              src={reasonable}
              alt="reasonable"
              className={styles.reasonable_img}
            />
            <p>Reasonable</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
