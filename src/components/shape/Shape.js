import React, { useEffect } from 'react';
import styles from './Shape.module.css';
import ScrollReveal from 'scrollreveal';



const MinimalistShape = ({ number, title, description }) => {
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.number}`, {
            duration: 800,
            distance: "40px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.description}`, {
            duration: 800,
            distance: "40px",
            origin: "left",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.title}`, {
            duration: 800,
            distance: "40px",
            origin: "left",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
      }, []);
  return (
    <div className={styles.content}>
      <div className={styles.number}>{number}</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default MinimalistShape;