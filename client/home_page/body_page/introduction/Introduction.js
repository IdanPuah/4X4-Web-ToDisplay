import styles from './Introduction.module.css';

export default function Introduction() {
  return (
    <div className={`container-fluid align-items-start ${styles.IntroductionContainer}`} id={"aboutMe"}>

      <div className={`row justify-content-center align-items-center d-flex ${styles.customRow} `}>

          <div className={`col  justify-content-center align-items-center d-flex ${styles.customRow} `}>
              <img src="/images/bgIntro.png" alt="" className={`${styles.backGroundImgIntro}`}/>
          </div>
          
          <div className={`col  ${styles.introduction} ${styles.customRow}`}>
          <h1 className={styles.title}>מי אנחנו?</h1>
          <p className={`${styles.paragraph} ${styles.firstP}`}>
            אם אתם מחפשים הרפתקאות מרהיבות, נופים עוצרי נשימה ורגעים בלתי נשכחים - הגעתם למקום הנכון!
          </p>
          <p className={styles.paragraph}>
            איתנו תוכלו לקבל חוויה מהנה ומאתגרת הכוללת נופים עוצרי נשימה!
          </p>
          <p className={styles.paragraph}>
            בין אם אתם חובבי טבע, נהגים מנוסים או פשוט רוצים לגלות את הארץ בדרך חדשה, אנחנו כאן בשביל להדריך אתכם!
          </p>
          <p className={styles.paragraph}>
            הצטרפו לקהילה שלנו, שתפו את החוויות שלכם והכינו את עצמיכם להרפתקה הבאה שלכם
          </p>
          </div>

      </div>

    </div>
  );
}

export { Introduction };
