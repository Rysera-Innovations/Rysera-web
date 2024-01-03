import styles from "../styles/AboutUs.module.css";
import phone from "../assets/phone.svg"

const AboutUs = () => {
    return ( 
        <div className={styles.main}>
                <div className={styles.left_side}>
                        <div className={styles.title}>
                            About US
                        </div>
                        <div className={styles.description}>            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus.
                        </div>
                    
                </div>
    
                <div className={styles.right_side}>
                    <img className={styles.phone} src={phone} />
                </div>
        </div>
     );
}
 
export default AboutUs;