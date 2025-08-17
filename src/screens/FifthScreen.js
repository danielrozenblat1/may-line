
import styles from "./FifthScreen.module.css"
import nail from "../Icons/wired-lineal-1596-nails-hover-pinch.json"

import IconTextComponent from "../components/can/Can"
import FAQItem from "../components/questions/Questions"
import sucsess from "../Icons/wired-lineal-633-female-morph-success.json"
import polish from "../Icons/wired-lineal-1592-nail-polish-hover-pinch.json"
import money from "../Icons/wired-lineal-2752-banknote-hover-pinch.json"
import loop from "../Icons/wired-lineal-2177-infinity-sign-hover-draw.json"
import patience from "../Icons/wired-lineal-472-hourglass-hover-rotation.json"
import practice from "../Icons/wired-lineal-1594-manicure-hover-pinch.json"
import FormScreen from "../components/form/FormScreen"
import Button from "../components/Button/Button"
const FifthScreen=()=>{


    return <>
<div className={styles.title}>חשוב שתביני</div>
<div className={styles.descriptionB}>אין דבר כזה הצלחה ברגע!</div>

<div className={styles.description}>בנוסף לידע שתרכשי ממני את הופכת לעצמאית ותוכלי</div>
<div className={styles.row}>
<IconTextComponent text="להגשים את עצמך ולהתחיל להיות הבוסית של עצמך" icon={sucsess}/>
<IconTextComponent text="לעסוק בתחום שאת הכי אוהבת ולהנות מכל יום שעובר" icon={polish}/>
<IconTextComponent text="להרוויח סכומים שפעם רק חלמת עליהם" icon={money}/>
</div>
<div className={styles.descriptionB}>אבל! זה יגיע רק בתנאי שאת</div>
<div className={styles.row}>
<IconTextComponent text="תתמידי ותהי מחוייבת לתהליך ולדרך שאת עומדת לעבור" icon={loop}/>
<IconTextComponent text="לא תפסיקי לתרגל ולהשתפר מיום ליום" icon={practice}/>
<IconTextComponent text="תהי סבלנית,הדברים לא קורים ברגע!" icon={patience}/>
</div>
<div className={styles.descriptionB}>אז אם את מאמינה שהצלחה זה תהליך,שתרגול והשקעה מביאים תוצאות והכי חשוב - מאמינה בעצמך!</div>
<Button text="תלחצי כאן ונדבר"/>
    </>
}
export default FifthScreen