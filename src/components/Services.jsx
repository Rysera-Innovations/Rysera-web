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

function Services() {
  const servicesData = [
    {
      title: "Web Designing",
      description:
        "we design websites that are responsive, scalable and ignite across screens with pixel-perfect UI and optimized UX . ",
      images: [figma, xd],
    },
    {
      title: "Web Development",
      description:
        "Our expertise spans full-stack development, ensuring websites are scalable, responsive and  functionally exceptional. Build your high-performing website with us.",
      images: [react, next, node, firebase],
    },
    {
      title: "IOT Systems",
      description:
        "Our solutions securely automate tasks and empower data-driven decisions for any industry. Let's unlock your smart potential together.",
      images: [arduino, raspberry],
    },
    {
      title: "Mobile applications",
      description:
        "we craft captivating mobile apps for iOS & Android, optimized for performance and designed to delight. Let' us build your dream mobile app.",
      images: [flutter, react],
    },

    {
      title: "SEO optimization",
      description:
        "we create data-driven SEO strategies that deliver real results, dominate search and own your online space .Let our experts unlock your brand's full potential.",
      images: [analytics],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Our Services</span>
      </div>

      <div className={styles.grid}>
        {servicesData.map((service, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.content_container}>
              <span>{service.title}</span>
              <p>{service.description}</p>
            </div>
            <div className={styles.imgframe}>
              <p>Expertise</p>
              <div className={styles.imgcontainer}>
                {service.images.map((image, j) => (
                  <img src={image} alt={service.title} key={j} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
