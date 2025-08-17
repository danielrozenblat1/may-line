import React from 'react';
import styles from './Me.module.css';
import may from "../../images/מאי סויסה.jpg"
const WhoAmI = () => {
  return <>
<div className={styles.title}>קצת עלי</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={may} alt="מאי ליין" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.name}>מאי סוויסה</h2>
        <p className={styles.description}>שמי מאי, בת 23 מנתניה
התחלתי את דרכי לפני כ-5 שנים בתחום האסטטיקה. למדתי קורס עיצוב גבות והרמת ריסים באקדמיה מקצועית. החלטתי להקים עסק עצמאי משלי ״MAY LINE” ולשלב יחד איתו קורס ציפורניים 💅🏽 

אני מזמינה אותך להגשים את עצמך שגם את! כן כן את! תצליחי לפתוח עסק עצמאי משלך ולהיות המנהלת של עצמך🛎️ להכנס יחד איתי לעולם האסטטיקה כדי ללמוד את תחום הציפורניים 💅🏽  ואת תחום הגבות כקורס מתנה ממני🪄 בזמן כל כך קצר⏳ברורר! שאלווה אותך ואהיה איתך בתחילת דרך!🫶🏼</p>
      </div>
    </div>
    </>
};

export default WhoAmI;