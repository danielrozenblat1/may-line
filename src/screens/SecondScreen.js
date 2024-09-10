import Why from "../components/why/Why"
import styles from "./SecondScreen.module.css"
import nail from "../Icons/wired-lineal-1596-nails-hover-pinch.json"
const SecondScreen=()=>{


    return <>
<div className={styles.title}>תמיד אמרת לעצמך</div>
<div className={styles.row}>
    <Why title="התחום הזה בדיוק בשבילי" icon={nail} description="תמיד אהבת להתעסק עם ציפורניים ואפילו כמה חברות ביקשו ממך שתעשי גם להן" />
    <Why title="התחום הזה בדיוק בשבילי" icon={nail} description="תמיד אהבת להתעסק עם ציפורניים ואפילו כמה חברות ביקשו ממך שתעשי גם להן" />
    <Why title="התחום הזה בדיוק בשבילי" icon={nail} description="תמיד אהבת להתעסק עם ציפורניים ואפילו כמה חברות ביקשו ממך שתעשי גם להן" />
    </div>
    <div className={styles.description}>ואפילו חיפשת כמה קורסים בתחום אבל לא מצאת עדיין את הקורס שהכי מתאים <strong> לך?</strong></div>
    <div className={styles.title}>אני גאה להציג את</div>
    </>
}
export default SecondScreen