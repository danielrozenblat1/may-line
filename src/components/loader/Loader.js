import React from 'react';
import styles from './Loader.module.css';

const HebrewLoading = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.tet}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.letter}>
          <path d="M3.5 2.5h9v11h-9v-11zm1 1v9h7v-9h-7z" />
        </svg>
      </span>
      <span className={styles.vav}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.letter}>
          <path d="M7 2.5h2v11H7v-11z" />
        </svg>
      </span>
      <span className={styles.ayin}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.letter}>
          <path d="M3.5 2.5h9v11h-9v-11zm1 1v9h7v-9h-7zM8 7.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" />
        </svg>
      </span>
      <span className={styles.nun}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.letter}>
          <path d="M7 2.5h2v9.5l-2 2v-11.5z" />
        </svg>
      </span>
      <span className={styles.dot}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.letter}>
          <circle cx="8" cy="13" r="1.5" />
        </svg>
      </span>
      <span className={styles.dot}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.letter}>
          <circle cx="8" cy="13" r="1.5" />
        </svg>
      </span>
      <span className={styles.dot}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.letter}>
          <circle cx="8" cy="13" r="1.5" />
        </svg>
      </span>
    </div>
  );
};

export default HebrewLoading;