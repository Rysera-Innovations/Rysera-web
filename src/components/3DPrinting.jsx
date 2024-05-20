import styles from "../styles/3DPrinting.module.css";
import printer from "../assets/Services/3DPrinting.webp";

const Printing = () => {
  const handleQuote = () => {
    window.open("https://wa.me/94766161592", "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span className={styles.title}>3D Printing</span>
        <img
          src={printer}
          alt="Rysera 3D Printing Services. Best 3D printing services in Sri Lanka"
          className={styles.printer_pic}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.description}>
          We manufacture high-quality, competitively priced custom prototypes &
          production parts.
        </span>
        <button className={styles.quote} onClick={handleQuote}>
          Quote Now
        </button>
      </div>
    </div>
  );
};

export default Printing;
