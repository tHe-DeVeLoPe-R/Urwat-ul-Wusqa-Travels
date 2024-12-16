import React, { useState, useEffect } from 'react';
import styles from '../styles/ContactUs.module.css';

export default function ContactUs() {
    const [isNotMobile, setisNotMobile] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setisNotMobile(window.innerWidth >= 760);
    }, []);

    const handleLaunchWhatsApp = (e) => {
        e.preventDefault(); // Prevents form submission
        if (!name || !message) {
            alert('Please fill in both fields before launching WhatsApp.');
            return;
        }
        const phoneNumber = '923004965615';
        const text = `Hello, my name is ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
        window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
    };

    return (
        <div>
    
                <div className={isNotMobile ? styles.contact_desktop_main : styles.contact_mobile_main}>
                    
                    <div className={isNotMobile ? styles.desktop_form : styles.mobile_form}>
                        <h1>Contact us</h1>
                        <form onSubmit={handleLaunchWhatsApp} className={isNotMobile ? styles.desktop_form_element : styles.mobile_form_element}>
                            <input 
                                type="text" 
                                placeholder='Good name' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required
                            />
                            <textarea 
                                placeholder='Your Message' 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                required
                            ></textarea>
                            <button type="submit" className={styles.cta_button}>Launch Whatsapp</button>
                        </form>
                        <br />
                        <p className={styles.mail}>
                            I want to contact via <a href="mailto:zafarkel1056@gmail.com">Mail</a>
                        </p>
                    </div>
                </div>
           
        </div>
    );
}
