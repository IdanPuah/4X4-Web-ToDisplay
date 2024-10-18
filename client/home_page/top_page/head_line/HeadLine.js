// import styles from "./HeadLine.module.css";

// function HeadLine() {

//     /*
//      Function to handle buttun clicks
//      */
//     const handleBottun = (section) => {
//         const element = document.getElementById(section);
//         if (element) {
//         const navbar = document.querySelector('.navbar'); // Select the navbar element
//         const offset = navbar ? navbar.offsetHeight : 0; // Get the navbar height dynamically + offset, or set to 0 if not found
//         const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;

//         // Scroll to the section smoothly
//         window.scrollTo({
//             top: elementPosition,
//             behavior: 'smooth',
//         });
//         }
//     };


//     /*
//         row of the head line part, include the logo, the title and the description
//     */
//     return (
//         <div className={`row  ${styles.headLine}`}>
//             <img src="/images/logo.png" alt="Logo" className={`${styles.logoCostom}`} />
//             <h1 className={`${styles.firstTitle}`}> חווית ג'יפים מדהימה </h1>
//             <h1 className={`${styles.secondTitle}`}>    של פעם בחיים</h1>
//             <h3 className={`${styles.headDescription}`}>בואו להנות ממגוון מסלולים של טיולי ג'יפים ברחבי הארץ</h3>
//             <h3 className={`${styles.headDescription}`}>זמן איכות עם המשפחה, אקסטרים ונופים עוצרי נשימה</h3>
//             <button className={`btn ${styles.headLineButton}`}
//                      onClick={(e) => {
//                     e.preventDefault(); // Prevent default anchor behavior
//                     handleBottun('aboutMe');
//                   }}>
//                      לכל המסלולים שלנו
//             </button>
//         </div>
//     );
// }
// export { HeadLine };


import styles from "./HeadLine.module.css";

function HeadLine() {

    /*
     Function to handle buttun clicks
     */
    const handleBottun = (section) => {
        const element = document.getElementById(section);
        if (element) {
        const navbar = document.querySelector('.navbar'); // Select the navbar element
        const offset = navbar ? navbar.offsetHeight : 0; // Get the navbar height dynamically + offset, or set to 0 if not found
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;

        // Scroll to the section smoothly
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
        });
        }
    };


    /*
        row of the head line part, include the logo, the title and the description
    */
    return (
        <div className={`row  justify-content-center align-items-center ${styles.headLine}`} >
            {/* <div className="col-12 col-md-4">
                <img src="/images/logo.png" alt="Logo" className={`${styles.logoCostom}`} />
            </div> */}
            
            <div className="row justify-content-center align-items-center text-center">
                <img src="/images/logo.png" alt="Logo" className={`${styles.logoCostom}`} />
                <h1 className={`${styles.firstTitle}`}> חווית ג'יפים מדהימה </h1>
                <h1 className={`${styles.secondTitle}`}> של פעם בחיים </h1>
                <h3 className={`${styles.headDescription}`}>בואו להנות ממגוון מסלולים של טיולי ג'יפים ברחבי הארץ</h3>
                <h3 className={`${styles.headDescription}`}>זמן איכות עם המשפחה, אקסטרים ונופים עוצרי נשימה</h3>
                <button className={`btn ${styles.headLineButton}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleBottun('aboutMe');
                        }}>
                        לכל המסלולים שלנו
                </button>
            </div>
        </div>

    );
}
export { HeadLine };