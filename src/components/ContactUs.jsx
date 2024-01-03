import styles from "../styles/ContactUs.module.css";
import image from "../assets/Up Arrow.jpg";

const ContactUs = () => {
  return (
    <div className={ styles.contactUs_main }>
      <div className={ styles.contactUs_main_left }>
        <span>Let&#39;s talk about your Business</span>
      </div>
      <div className={ styles.contactUs_main_right }>
        <div className={ styles.text_1 }>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Eu ultrices vitae auctor eu.
          </span>
        </div>
        <div className={ styles.link_button }>
          <div className={ styles.button }>
            <button> 
              <div>
                <span className={ styles.text_2 }>Contact Us</span>
                <img src = { image } alt = "arrow"  className={ styles.picture }/>
              </div>
            </button>
          </div>
          <div className={ styles.e_mail }>
            <p>rysera.innovations@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ContactUs;