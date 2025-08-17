import React from 'react';
import styles from './Recommend.module.css';

const Recommendation = ({ stars, name, description }) => {
  return (
    <div className={styles.recommendation}>
      <div className={styles.stars}>
        {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Recommendation;