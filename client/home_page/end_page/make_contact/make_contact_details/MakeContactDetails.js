import styles from "./MakeContactDetails.module.css";

function MakeContactDetails() {
    return (
        <div className={`col ${styles.customRow}`}>
                <span className={`d-flex justify-content-center align-items-center`}>
                    <i className="bi bi-telephone-fill"></i>
                    <span className={`${styles.phoneCustom}`}>  054-1234567</span>
                </span>

                <span className={`d-flex justify-content-center align-items-center`}>
                    <i className="bi bi-telephone-fill"></i>
                    <span className={`${styles.phoneCustom}`}>  054-1234567</span>
                </span>

                <div  className={`d-flex justify-content-center align-items-center`}>
                    <img src="/images/makeContactLogo.png" alt="" className={`${styles.makeContactLogo}`} />
                </div>
        </div>
    );
}
export { MakeContactDetails };