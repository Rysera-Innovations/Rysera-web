import styles from "../styles/AboutUs.module.css";
import phone from "../assets/phone.svg";
import creative from "../assets/Brain.png";
import modern from "../assets/Programming.png";
import punctual from "../assets/Love Time.png";
import reliable from "../assets/Helping Hand.png";
import reasonable from "../assets/Dollar Coin.png";

const AboutUs = () => {
  return (
    <>
      <div id="aboutUs"className={styles.main}>
        <div className={styles.left_side}>
          <div className={styles.content_container}>
            <div className={styles.title}>About US</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
              ultrices vitae auctor eu. Sociis natoque penatibus et magnis dis
              parturient montes nascetur ridiculus.
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
