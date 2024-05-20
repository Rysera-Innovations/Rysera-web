import styles from "../styles/ContactUs.module.css";
import { ArrowRight } from "@phosphor-icons/react";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span>Let's talk about your Business</span>
      </div>
      <div className={styles.description_container}>
        <div className={styles.description}>
          <span>
            Ready to Ryse? Let's talk. Drop us a message, and together, we'll
            explore the possibilities that turn your dreams into reality.
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
