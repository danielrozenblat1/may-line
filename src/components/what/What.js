import React from 'react';
import styles from './What.module.css';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
const ImageTextComponent = ({ items }) => {
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 800,
            distance: "60px",
            origin: "right",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.description}`, {
            duration: 800,
            distance: "60px",
            origin: "left",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
      }, []);
    return <>
        <div className={styles.bold}>את תצאי ממני עם</div>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={index} className={`${styles.row} ${index % 2 === 0 ? styles.imageRight : styles.imageLeft}`}>
            {index % 2 === 0 ? (
              <>
                <div className={styles.textContainer}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.description}>{item.description}</p>
                </div>
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.title} className={styles.image} />
                </div>
              </>
            ) : (
              <>
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.title} className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className={styles.bold}>ובנוסף</div>
      <div className={styles.boldR}>את תצאי ממני עם שני מקצועות ביד</div>
      <div className={styles.explain}>כל מי שמצטרפת לקורס ציפורניים</div>
      <div className={styles.boldR}>מקבלת בחינם גם קורס גבות! <br/> (בשווי 2500 ש''ח)</div>
 </>
  };
  
  export default ImageTextComponent;