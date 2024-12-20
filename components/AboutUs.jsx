import React from 'react'
import styles from '../styles/About.module.css'
import { useState, useEffect } from 'react'
import Aboutimg from '../public/images/utwbus.jpg'
export default function AboutUs() {

    const [isNotMobile, setIsNotMobile] = useState(false);

    useEffect(() => {
        setIsNotMobile(window.innerWidth >= 760);
    });
    return (
        <div>
          <div className={styles.desktop_about}>
                <h1>About us</h1>
                <div className={isNotMobile ? styles.desktop_about_columns: styles.mobile_about_columns}>
                    <div className={isNotMobile ? styles.desktop_about_column: styles.mobile_about_column}>
                        <img src={Aboutimg.src} alt="img" />
                    </div>
                    <div className={isNotMobile ? styles.desktop_about_column: styles.mobile_about_column}>
                        <p>
                            <b>Urwat Ul Wusqa Travels</b>, operating under License No. 8488, is a trusted name in the travel and tourism industry. With several years of dedicated service, we have established ourselves as a reliable partner for clients seeking seamless and memorable travel experiences. Our commitment to excellence and personalized service has earned us the trust and loyalty of a growing number of happy clients.
<br /><br />
                            At <b>Urwat Ul Wusqa Travels</b>, we specialize in providing a wide range of travel solutions, including flight bookings, visa assistance, hotel reservations, and tailored travel packages. Our experienced team is passionate about ensuring every journey is smooth, enjoyable, and stress-free for our clients. Customer satisfaction is at the heart of our mission, and we continuously strive to exceed expectations with every trip we plan.
<br /> <br />
                            Join our community of happy travelers and let <b>Urwat Ul Wusqa Travels</b> turn your travel dreams into reality.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
