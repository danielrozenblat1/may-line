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
        <p className={styles.description}>מגיל קטן תחום הציפורניים שאב אותי ותמיד הייתי אוהבת לעשות לחברות שלי ציפורניים , לאט לאט הבנתי שאם אתמקצע בתחום ואקח את זה ברצינות אני יכולה להרוויח סכומים רק חלמתי עליהם - והיום - היום אני חיה את תחום הביוטי,נהנת מכל יום שעובר ושמחה למקצע את דור ההמשך</p>
      </div>
    </div>
    </>
};

export default WhoAmI;