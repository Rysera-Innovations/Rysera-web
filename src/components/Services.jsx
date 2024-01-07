import styles from "../styles/Services.module.css";
import figma from "../assets/Services/FigmaLogo.webp";
import xd from "../assets/Services/AdobeLogo.webp";
import react from "../assets/Services/ReactLogo.webp";
import next from "../assets/Services/NextJsLogo.webp";
import node from "../assets/Services/NodeJsLogo.webp";
import firebase from "../assets/Services/FirebaseLogo.webp";
import arduino from "../assets/Services/ArduinoLogo.webp";
import raspberry from "../assets/Services/RaspberryPiLogo.webp";
import flutter from "../assets/Services/FlutterLogo.webp";
import analytics from "../assets/Services/GoogleAnalyticsLogo.webp";

import { useRef, useEffect } from "react";

function Services() {
  const servicesData = [
    {
      title: "Web Designing",
      description:
        "From sketch to launchpad: Web design mastered with Figma & Adobe XD.",
      images: [figma, xd],
    },
    {
      title: "Web Development",
      description:
        "Build scalable and responsive web applications using modern technologies.",
      images: [react, next, node, firebase],
    },
    {
      title: "IOT Systems",
      description: "Create smart and connected systems using IOT technologies.",
      images: [arduino, raspberry],
    },
    {
      title: "Mobile applications",
      description:
        "Develop cross-platform mobile applications for iOS and Android.",
      images: [flutter, react],
    },

    {
      title: "SEO optimization",
      description:
        "Optimize websites to improve search engine rankings and increase visibility.",
      images: [analytics],
    },
  ];

  const contRefs = servicesData.map(() => useRef());
  const h1Refs = servicesData.map(() => useRef());

  useEffect(() => {
    const handleResize = () => {
      contRefs.forEach((contRef, i) => {
        contRef.current.style.width = `${h1Refs[i].current.offsetWidth}px`;
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial adjustment

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <span className={styles.title}>Our Services</span>
      </div>

      <div className={styles.grid}>
        {servicesData.map((service, i) => (
          <div className={styles.frame} key={i}>
            <div className={styles.container} ref={contRefs[i]}>
              <h1 ref={h1Refs[i]}>{service.title}</h1>
              <p>{service.description}</p>
              <div className={styles.imgframe}>
                <p>Expertise</p>
                <div className={styles.imgcontainer}>
                  {service.images.map((image, j) => (
                    <img src={image} alt={service.title} key={j} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
