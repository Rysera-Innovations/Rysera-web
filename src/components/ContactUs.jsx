import styles from "../styles/ContactUs.module.css";
import { ArrowRight } from "@phosphor-icons/react";

const ContactUs = () => {
  return (
    <div id= "ContactUs" className={styles.container}>
      <div className={styles.title_container}>
        <span>Let&#39;s talk about your Business</span>
      </div>
      <div className={styles.description_container}>
        <div className={styles.description}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
            ultrices vitae auctor eu.
          </span>
        </div>
        <div className={styles.button_container}>
          <div className={styles.button}>
            <button>
              <span className={styles.button_text}>Contact Us</span>
              <ArrowRight className={styles.icon} color="#f7f7f7" />
            </button>
          </div>
          <div className={styles.e_mail}>rysera.innovations@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
