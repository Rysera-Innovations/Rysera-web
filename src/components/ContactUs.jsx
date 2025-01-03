import styles from "../styles/ContactUs.module.css";
import { ArrowRight } from "@phosphor-icons/react";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span>Let&apos;s talk about your Business</span>
      </div>
      <div className={styles.description_container}>
        <div className={styles.description}>
          <span>
            Ready to Ryse? Let&apos;s talk. Drop us a message, and together,
            we&apos;ll explore the possibilities that turn your dreams into
            reality.
          </span>
        </div>
        <div className={styles.button_container}>
          <div className={styles.button}>
            <button
              onClick={() => {
                window.open("https://wa.me/+94703359118", "_blank"); // Replace with the actual phone number
              }}
            >
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
