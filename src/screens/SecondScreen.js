import Why from "../components/why/Why"
import styles from "./SecondScreen.module.css"
import nail from "../Icons/wired-lineal-1596-nails-hover-pinch.json"
import FormScreen from "../components/form/FormScreen"
const SecondScreen=()=>{


    return <>
<div className={styles.title} id="אם">אם תמיד אמרת לעצמך</div>
<div className={styles.row}>
<Why title="אני רוצה להיות הבוסית של עצמי" icon={nail} description="תמיד ידעת שאת רוצה לנהל את החיים של עצמך ולהחליט מה לעשות בכל רגע נתון! לא להיות תלויה בבוס ולעבוד בשעות לא שעות כדי שבסוף הוא ירוויח יותר" />
    <Why title="אני רוצה להרוויח יותר" icon={nail} description=" במקום לעשות משכורת חודשית של 15,000 (ואפילו יותר) את תקועה עם שכר מינימום ובונוסים שעשו לך טובה שהביאו לך, את לא שווה את זה ומגיע לך הרבה יותר!" />
    <Why title="התחום הזה בדיוק בשבילי" icon={nail} description="תמיד אהבת להתעסק עם ציפורניים, תמיד עניין אותך לקחת את זה לשלב הבא אבל הרגשת כל פעם שזה לא הזמן לעשות את השינוי" />
    </div>
    <div className={styles.description}>ואפילו חיפשת כמה קורסים בתחום אבל לא מצאת עדיין את הקורס שהכי מתאים <strong> לך?</strong></div>
    <div className={styles.description} style={{textDecoration:"underline"}}>הגעת למקום הנכון!</div>

    <div className={styles.title}>אני גאה להציג את</div>
    </>
}
export default SecondScreen