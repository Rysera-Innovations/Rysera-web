import styles from "../styles/Services.module.css";
import figma from "../logos/figma.svg";
import xd from "../logos/Adobe XD.svg";
import React, { useRef, useEffect } from "react";

function Services() {
  const servicesData = [
    {
      title: 'Web Designing',
      description: 'From sketch to launchpad: Web design mastered with Figma & Adobe XD.',
      images: [figma, xd] 
    },
    {
      title: 'Web Development',
      description: 'Build scalable and responsive web applications using modern technologies.',
      images: [] 
    },
    {
      title: 'IOT Systems',
      description: 'Create smart and connected systems using Internet of Things (IoT) technologies.',
      images: [] 
    },
    {
      title: 'Mobile applications',
      description: 'Develop cross-platform mobile applications for iOS and Android.',
      images: [] 
    },
    {
      title: 'SEO optimization',
      description: 'Optimize websites to improve search engine rankings and increase visibility.',
      images: [] 
    }
  ];
  
  const contRefs = servicesData.map(() => useRef()); 
  const h1Refs = servicesData.map(() => useRef()); 

  useEffect(() => {
    const handleResize = () => {
      contRefs.forEach((contRef, i) => {
        contRef.current.style.width = `${h1Refs[i].current.offsetWidth}px`;
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial adjustment

    return () => {
      window.removeEventListener('resize', handleResize);
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
                <div className={styles.imgcontainer} >
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
