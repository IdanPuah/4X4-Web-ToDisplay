import styles from "./FormContact.module.css";
import { useState } from 'react';

function FormContact({saveContactDetails}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    /*
    func to handle the submit of the form
    after the user click on the submit button
    the func will call the saveContactDetails to 
    save the contact details in server
    */
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior refresh the page

        try {
        // Call func to save the contact details to the server
        const isSaved = await saveContactDetails(firstName, lastName, phone);

        // Handle the result of the save operation
        if (!isSaved) {
            setMessage('משהו השתבש, נסה שוב מאוחר יותר.');
        } else {
            setMessage(`תודה, ${firstName}! נחזור אליך בקרוב.`);
        }
        } catch (error) {
            console.error('Error saving contact details:', error);
            setMessage('משהו השתבש, נסה שוב מאוחר יותר.'); // Display a user-friendly error message
        }

        // Reset form fields
        setFirstName('');
        setLastName('');
        setPhone('');
    };
    return (
        <div className={`${styles.formPage}`}>
            <div className={`row d-flex ${styles.formContainer}`}>
                <h1 className={styles.clipTitle}>מוכנים להתחיל במסע?</h1>
            
                <div className={styles.container}>
                    <h2 className={styles.title}>תשלחו לנו את הפרטים שלכם ונחזור אליכם!</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label className={styles.label}>
                            שם פרטי:
                            <input 
                                type="text" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                                required 
                                className={styles.input} 
                            />
                        </label>
                        <label className={styles.label}>
                            שם משפחה:
                            <input 
                                type="text" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                                required 
                                className={styles.input} 
                            />
                        </label>
                        <label className={styles.label}>
                            טלפון:
                            <input 
                                type="tel" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                                className={styles.input} 
                            />
                        </label>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={` ${styles.button}`}>
                                <span>שלח</span>
                            </button>
                        </div>                
                    </form>
                    {message && <p className={styles.message}>{message}</p>}
                    <p className={styles.contactText}>אפשר גם להתקשר: <strong>052-1234567</strong></p>

                </div>
            </div>
        </div>
    );
}

export { FormContact };