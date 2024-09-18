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
    const meetings = [
        {
            number: "1",
            title: "יסודות המניקור וג'ל",
            description: "לומדים מניקור, סוגי ציפורן, צורות ציפורניים ושלבים ראשונים ליצירת ג'ל מושלם עם מבנה אנטומי."
        },
        {
            number: "2",
            title: "השלמות עם ג'ל/פוליג'ל",
            description: "לומדים השלמות עם חומרי בנייה בטיפס הפוך והתאמת טיפס לסוג הציפורן."
        },
        {
            number: "3",
            title: "חיזוקים ועבודה מתקדמת",
            description: "חיזוקים מהשיעור הקודם, עבודה עם חומרי בנייה וסוגי צורות לבנייה."
        },
        {
            number: "4",
            title: "בנייה מלאה חדשה",
            description: "בנייה מלאה חדשה לגמרי - עבודה עם ג'ל או פוליג'ל."
        },
        {
            number: "5",
            title: "שיעור בונוס: עיצוב גבות ובניית עסק",
            description: "עיצוב גבות טבעיות, למידה על אפליקציות עריכה, פרסום ממומן, ובניית עסק."
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
        <div className={styles.explain}>מחיר השקה ל-10 הראשונות שמשאירות פרטים</div>
        <div className={styles.little}>* 5 נותרו *</div>
        <FormScreen/>
    </>
}

export default ForthScreen;