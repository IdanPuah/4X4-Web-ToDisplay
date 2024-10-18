import styles from "./MakeContactForm.module.css";
import { useState } from 'react';


function MakeContactForm({saveContactDetails}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    /*
    func to handle the submit of the last form
    after the user click on the submit button
    the func will call the saveContactDetails to 
    save the contact details in server
    */
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        // Call func to save the contact details to the server
        const isSaved = await saveContactDetails(firstName, lastName, phone, email);

        // Handle the result of the save operation
        if (!isSaved) {
            setMessage('המייל כבר קיים במערכת, נא הקלד מייל אחר');
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
        setEmail('');
    };
    
    return (
        <div className={`col d-flex justify-content-center align-items-center ${styles.customRow}`}>
                <div className={styles.container}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label className={styles.label}>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                placeholder="הזן את שמך הפרטי"
                                className={styles.input}
                            />
                        </label>
                        <label className={styles.label}>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                placeholder="הזן את שם המשפחה"
                                className={styles.input}
                            />
                        </label>
                        <label className={styles.label}>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                placeholder="הזן את מספר הטלפון"
                                className={styles.input}
                            />
                        </label>
                        <label className={styles.label}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="הזן את כתובת האימייל"
                                className={styles.input}
                            />
                        </label>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.button}>
                                <span>לחצו לשליחה ונחזור אליכם בהקדם (:</span>
                            </button>
                        </div>
                    </form>
                    {message && <p className={styles.message}>{message}</p>}
                </div>
            </div>
    );
}
export { MakeContactForm };