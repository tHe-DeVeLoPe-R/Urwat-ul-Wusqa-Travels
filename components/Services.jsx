import React from 'react'
import styles from '../styles/Services.module.css'

import { useState, useEffect } from 'react'
export default function Services() {
    const [isNotMobile, setIsNotMobile] = useState(false);

    useEffect(() => {
        setIsNotMobile(window.innerWidth >= 600);
    })
    return (
        <div>
            <div> <h1 className = {styles.services_heading}>Round-Trip Services</h1></div>
            <div> <small className = {styles.services_small}>Click Images To Reveal Services</small></div>
            {
                isNotMobile ? (<div className={styles.services_desktop}>
                   
                    <div className={styles.service_item}>
                        <div className={styles.service_item_content}>
                            <h1>Transport</h1>
                            <small>Click to reveal</small>
                            <p>Transport will be provided as: <ol><li>
                                Jaranwala Offiece to Lahore Airport

                            </li>
                                <li> Jeddah Airport to Makkah Hotel</li>
                                <li> Makkah Hotel to Medinah Hotel</li>
                                <li> Medinah Hotel to Makkah Hotel</li>
                                <li> Makkah Hotel to Jeddah Airport</li>
                                <li> Lahore Airport to Jaranwala Offiece</li>
                                <li> Zyarat transport also included</li>

                            </ol></p>
                        </div>
                    </div>

                    {/* ------------------------------------------- */}

                    <div className={styles.service_item}>
                        <div className={styles.service_item_content}>
                            <h1>Zyarat</h1>
                            <small>Click to reveal</small>
                            <p>Zyarat included are: <ol><li>
                                Baitullah Shareef

                            </li>
                                <li> Hajj Related Zyarat</li>
                                <li> Hijrat E Nabvi Related </li>
                                <li> Masjid E Nabvi Shareef</li>
                                <li> Masjid E Qiblatain</li>
                                <li> Masjid E Quba</li>
                                <li> Almost 10+ Other Zyarat</li>

                            </ol></p>
                        </div>
                    </div>

                     {/* ------------------------------------------- */}

                     <div className={styles.service_item}>
                        <div className={styles.service_item_content}>
                            <h1>Guiding Session</h1>
                            <small>Click to reveal</small>
                            <p>For Guiding session all the participants of the group will be called to Jaranwala Offiece, where a proper guidance related to Ehram, Manasik and other related things will be given. Your Tickets, Passport and other related documents will be handed over to you in this sesison. In this session you can ask any related queries and any other document related questions. <br />
                            This session took place almost 1 week before leaving from Pakistan. At the end of the session a meal will also be served as a welcome sign.
                            </p>
                        </div>
                    </div>

                    {/* ------------------------------------------- */}

                    <div className={styles.service_item}>
                        <div className={styles.service_item_content}>
                            <h1>Realtime Assistance</h1>
                            <small>Click to reveal</small>
                            <p>Our CEO, who understands the importance of personal engagement, believes in the power of hands-on guidance. To this end, they travel with the group or personally welcome the passengers at their destination to ensure a smooth transition into their spiritual journey. This unique approach allows for real-time support, fostering a deeper connection with the passengers and enabling a more fulfilling experience.
                            </p>
                        </div>
                    </div>

                </div>) : (<div></div>)
            }
        </div>
    )
}
