import styles from './MakeContact.module.css';
import {MakeContactDetails} from './make_contact_details/MakeContactDetails.js';
import {MakeContactForm} from './make_contact_form/MakeContactForm.js';

function MakeContact({saveContactDetails}) {


    /* row of make contact part, include 2 col,
       one for save self details, and other for set contact
       details like phone numbers. 
       have id of contact for the nav-bar*/
    return (
        <div className={`row d-flex justify-content-center align-items-center ${styles.customRow}`} id={'contact'}>
            <h2 className={`d-flex justify-content-center align-items-center`}>
                <span className={`${styles.makeContactTitle}`}>צרו קשר</span>
            </h2>
            
            <MakeContactDetails />


            <MakeContactForm saveContactDetails={saveContactDetails}/>

        </div>
    );
}
export {MakeContact};