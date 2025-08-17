import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FirstScreen.module.css';

const FirstScreen = () => {
  const [isArrowUp, setIsArrowUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsArrowUp(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = () => {
    const nextSection = document.getElementById('אם');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>may line</h1>
        <p className={styles.description}>
 קורס לימוד הציפורניים שיהפוך אותך למניקוריסטית בסטנדרט הגבוה ביותר
        </p>
        <ChevronDown
          className={`${styles.arrow} ${isArrowUp ? styles.arrowUp : ''}`}
          onClick={handleArrowClick}
        />
      </div>
    </div>
  );
};

export default FirstScreen;