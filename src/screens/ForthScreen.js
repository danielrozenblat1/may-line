import React from 'react';
import MinimalistShape from "../components/shape/Shape"

import styles from "./ForthScreen.module.css"
import ImageTextComponent from '../components/what/What';
import know from "../images/ידע.png"
import certificate from "../images/תעודה.png"
import business from "../images/יסודות עסק.png"
import two from "../images/שני מקצועות.png"
import FormScreen from '../components/form/FormScreen';
const ForthScreen = () => {
    const items = [
        {
            title: "ידע מקצועי מקיף",
            description: "תקבלי את כל הידע הדרוש להפוך למומחית בתחום הציפורניים, כולל טכניקות מתקדמות ומגמות עדכניות.",
            image: know
        },
        {
            title: "תעודה מוכרת",
            description: "בסיום הקורס תקבלי תעודה מוכרת המעידה על הכשרתך המקצועית, מה שיעזור לך לבנות אמון עם לקוחות פוטנציאליים.",
            image: certificate
        },
        {
            title: "יסודות לניהול עסק",
            description: "נלמד אותך את היסודות החיוניים לניהול עסק מצליח בתחום הציפורניים, כולל שיווק, תמחור ושירות לקוחות.",
            image: business
        },
        // {
        //     title: "שני מקצועות ביד",
        //     description: "בנוסף לקורס הציפורניים, תקבלי גם הכשרה בעיצוב גבות, מה שיאפשר לך להציע מגוון שירותים ללקוחותייך.",
        //     image: two
        // }
    ];

    const meetings = [
        {
            number: "1",
            title: "יסודות המניקור וג'ל",
            description: "ידע תיאורטי (מחלות ציפורניים, סטרליזציה, כוויות כימיות…) 4 שלבי חובה ליצירת הג׳ל המושלם"
        },
        {
            number: "2",
            title: "השלמות עם ג'ל בנייה",
            description: "השלמות ציפורניים בעזרת ג׳ל בנייה וטיפסים הפוכים, מילוי נכון לכל סוגי הצורות"
        },
        {
            number: "3",
            title: "השלמות עם פוליג'ל",
            description: "השלמות ציפורניים עם פוליג'ל ומילוי נכון דק עם החומר, בנוסף נלמד איך לשלב בין שני חומרי הבנייה לבנייה אחת"
        },
        {
            number: "4",
            title: "שיעור בונוס",
            description: "עיצוב גבות טבעיות (סימטריה,שרטוטים,נתאים שעווה למבנה הפנים של הלקוחה ופינישים עם פינצטה)."
        },
        {
            number: "5",
            title: "התנהלות עסקית",
            description: "בשיעור הזה נלמד את כל עיקרי העסק,ניהול יומן,פתיחת עסק,פרסום,שיווק והתנההלות כלכלית נכונה בעסק"
        },
        {
            number: "6",
            title: "חיזוקים סופיים וסיום הקורס",
            description: "חיזוקים אחרונים, דיוקים קטנים, הרמת כוסית וחלוקת תעודות."
        }
    ];
    
    
    // Function to chunk the meetings array into groups of 3
    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    }

    const rows = chunkArray(meetings, 3);

    return <>
        <div className={styles.background}>
    
            <div className={styles.description}>אז.. זה הולך לעבוד ככה</div>
            <div className={styles.bold}>6 פגישות , כל פגישה באורך 6 שעות שבהן תלמדי את</div>
            
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {row.map((meeting, meetingIndex) => (
                        <MinimalistShape 
                            key={meetingIndex}
                            number={meeting.number}
                            title={meeting.title}
                            description={meeting.description}
                        />
                    ))}
                </div>
            ))}
        </div>
            <ImageTextComponent items={items}/>

        <div className={styles.explain}>מחיר השקה ל-10 הראשונות שמשאירות פרטים</div>
        <div className={styles.little}>* 5 נותרו *</div>
        <FormScreen/>
    </>
}

export default ForthScreen;