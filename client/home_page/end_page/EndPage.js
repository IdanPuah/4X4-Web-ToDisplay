// import styles from "./EndPage.module.css";
import {MakeContact} from './make_contact/MakeContact.js';

function EndPage({saveContactDetails}) {

    return (
        <MakeContact saveContactDetails={saveContactDetails}/>
    );
}

export { EndPage };