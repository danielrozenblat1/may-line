import Button from "../components/Button/Button"
import FAQItem from "../components/questions/Questions"
import Recommendation from "../components/recommend/Recommend"
import styles from "./SixthScreen.module.css"
const SixthScreen=()=>{


    return <>
    <div className={styles.title}>קצת מהבנות שלמדו ממני</div>
    <div className={styles.row}>
    <Recommendation stars={5} name="קטיה" description="אין בעולם הזה מישהי יותר מקצועית ומקסימה ממנה!" />
    <Recommendation stars={5} name="מעיין פ." description="הכי תותחית בתחום!!" />
    <Recommendation stars={5} name="הדס פ." description="אלופה ומקצועית" />
 
    </div>
    <div className={styles.row}>
    <Recommendation stars={5} name="תאיר ג." description="לא מתאכזבת ממך אף פעם!" />
    <Recommendation stars={5} name="הדר א." description="אין על המקצועית והיחס האישי והחם" />
    </div>
  
    <div className={styles.title}>זמן לענות על כמה שאלות שלכן</div>

    <FAQItem question="אני יכולה להכנס לתחום גם אם אין לי רקע מקדים?" answer="כן! וזה מה שהכי יפה בתחום הזה! את צריכה רק לאהוב את התחום ולתרגל אותו בעזרת הידע שאת מקבלת - זה עניין של תרגול והתמדה ולא רק של כשרון"/>
    <FAQItem question="אני צריכה לשלם עוד בשביל לקבל את הקורס גבות?" answer="לא! - את מקבלת את קורס הגבות ממני בבונוס! ידע בשווי 2500 שקלים שבמידה ותוסיפי אותו לארסנל הטיפולים שלך תוכלי לעשות ממנו עם הזמן עשרות ואפילו מאות אלפי שקלים"/>
    <FAQItem question="את מעבירה גם השתלמויות או רק קורסים?" answer={<>כן, אני מעבירה השתלמויות וחיזוקים למניקוריסטיות שרוצות לשפר את הרמה שלהן או לחזק חלק שהן קצת פחות חזקות בו 
        <Button text="לחצי כאן לעוד מידע על ההשתלמויות" message="היי מאי, אשמח לשמוע ממך עוד לגבי השתלמות"/>
        </>}/>
    <FAQItem question="יש המון מניקוריסטיות היום - למה שדווקא אני אצליח" answer="כמו שיש המון מניקורסטיות - יש המון ביקוש לתחום והביקוש תמיד יהיה קיים! תחום הביוטי הוא תחום שלא ייגמר וההצלחה שלך תלוייה בכוח ההתמדה שלך , בכמות שאת מתרגלת ובאמונה שלך בעצמך!"/>

    <Button text="מאי, יש לי עוד כמה שאלות"/>
    </>
}
export default SixthScreen