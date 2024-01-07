import styles from "../styles/Navbar.module.css";
import logo from "../assets/Navbar/rysera-logo.webp";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import dropdown_logo from "../assets/dropdown.svg";
import phone_logo from "../assets/contact.svg";

const Navbar = () => {
  const [status, setStatus] = useState("home"); //This is to change the state of a when a navbar button is clicked
  const [isOpen, setIsOpen] = useState(false); //This is to change the state of a when hamburger button is clicked
  //   const [scrollDirection, setScrollDirection] = useState("up"); //scroll direction
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const currentScrollY = window.scrollY;
  //       if (currentScrollY > lastScrollYRef.current) {
  //         setScrollDirection("down");
  //         if (isOpenRef.current) {
  //           setIsOpen(false);
  //         }
  //       } else {
  //         setScrollDirection("up");
  //         if (!isOpenRef.current) {
  //           setIsOpen(true);
  //         }
  //       }
  //       lastScrollYRef.current = currentScrollY;
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <nav className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.rysera_logo_div}>
          {" "}
          <img className={styles.rysera_logo} src={logo} />{" "}
        </div>

        <div className={styles.links}>
          <span>
            <Link
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              to="hero"
              className={status == "home" ? styles.selected : ""}
              onClick={() => setStatus("home")}
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              to="aboutUs"
              className={status == "about-us" ? styles.selected : ""}
              onClick={() => setStatus("about-us")}
            >
              About Us
            </Link>
          </span>
          <span>
            <Link
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              to="services"
              className={status == "services" ? styles.selected : ""}
              onClick={() => setStatus("services")}
            >
              Services
            </Link>
          </span>
          <span>
            <Link
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              to=""
              className={status == "our-team" ? styles.selected : ""}
              onClick={() => setStatus("our-team")}
            >
              Our Team
            </Link>
          </span>
        </div>

        <div className={styles.links}>
          <Link
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            to="contactUs"
            className={status == "contactus" ? styles.selected : ""}
            onClick={() => setStatus("contactus")}
          >
            Contact Us
          </Link>
        </div>
        <div className={styles.hamburger}>
          <div>
            <Link
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              to="footer"
              className={styles.contact_logo}
            >
              <img src={phone_logo} alt="phone" />
            </Link>
          </div>

          <div className={styles.dropdown}>
            <img
              src={dropdown_logo}
              alt="dropdown"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </nav>

      <nav className={isOpen == true ? styles.submenu : styles.submenu_close}>
        <span>
          <Link
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            to="hero"
            className={status == "home" ? styles.selected : ""}
            onClick={() => setStatus("home")}
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            to="aboutUs"
            className={status == "about-us" ? styles.selected : ""}
            onClick={() => setStatus("about-us")}
          >
            About Us
          </Link>
        </span>
        <span>
          <Link
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            to="services"
            className={status == "services" ? styles.selected : ""}
            onClick={() => setStatus("services")}
          >
            Services
          </Link>
        </span>
        <span>
          <Link
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            to="ourTeam"
            className={status == "our-team" ? styles.selected : ""}
            onClick={() => setStatus("our-team")}
          >
            Our Team
          </Link>
        </span>
      </nav>
    </nav>
  );
};

export default Navbar;
