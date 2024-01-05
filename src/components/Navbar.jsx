import styles from '../styles/Navbar.module.css';
import logo from "../assets/Navbar/rysera-logo.webp";

const Navbar = () => {
    return ( 
        <nav className={styles.navbar}>
            
            <img  src={logo}>
            </img>
        
            <div className={styles.links}>
                <a className={styles.selected}>Home</a>
                <a>About Us</a>
                <a>Services</a>
                <a>Our Team</a>
           
               
            </div>
            <div>
                <a>Contact Us</a>
            </div>
        
        </nav>
     );
}
 
export default Navbar;