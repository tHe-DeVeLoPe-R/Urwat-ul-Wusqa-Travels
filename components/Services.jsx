import React from 'react'
import styles from '../styles/Services.module.css'
import transport from '../public/images/transport.svg'
import zyarat from '../public/images/zyarat.svg'
import guide from '../public/images/guide.svg'
import realtime from '../public/images/realtime.svg'
import { useState, useEffect } from 'react'
export default function Services() {
    const [isNotMobile, setIsNotMobile] = useState(false);

    useEffect(() => {
        setIsNotMobile(window.innerWidth >= 760);
    })
    return (
        <div>
            <div> <h1 className = {isNotMobile? styles.services_heading : styles.mobile_ser_heading}>Round-Trip Services</h1></div>
            <div> <small className = {styles.services_small}>SERVICES FOR GROUP TRAVELING</small></div>
           <div className={isNotMobile ? styles.services_desktop : styles.services_mobile}>
                   
                    <div className={isNotMobile? styles.service_item : styles.mobile_service_item}>
                        <div className={isNotMobile?styles.service_item_content:styles.mobile_service_item_content}>
                            <img src={transport.src} alt="img" />
                            <h1>Transport</h1>
                          
                             <ol><li>
                                Jaranwala Offiece to Lahore Airport

                            </li>
                                <li> Jeddah Airport to Makkah Hotel</li>
                                <li> Makkah Hotel to Medinah Hotel</li>
                                <li> Medinah Hotel to Makkah Hotel</li>
                                <li> Makkah Hotel to Jeddah Airport</li>
                                <li> Lahore Airport to Jaranwala Offiece</li>
                                <li> Zyarat transport also included</li>

                            </ol>
                        </div>
                    </div>

                    {/* ------------------------------------------- */}

                    <div className={isNotMobile? styles.service_item : styles.mobile_service_item}>
                        <div className={isNotMobile?styles.service_item_content:styles.mobile_service_item_content}>
                        <img src={zyarat.src} alt="img" />
                            <h1>Zyarat</h1>
                        
                            <ol><li>
                                Baitullah Shareef

                            </li>
                                <li> Hajj Related Zyarat</li>
                                <li> Hijrat E Nabvi Related </li>
                                <li> Masjid E Nabvi Shareef</li>
                                <li> Masjid E Qiblatain</li>
                                <li> Masjid E Quba</li>
                                <li> Almost 10+ Other Zyarat</li>

                            </ol>
                        </div>
                    </div>

                     {/* ------------------------------------------- */}

                     <div className={isNotMobile? styles.service_item : styles.mobile_service_item}>
                        <div className={isNotMobile?styles.service_item_content:styles.mobile_service_item_content}>
                        <img src={guide.src} alt="img" />
                            <h1>Guiding Session</h1>
                           
                            <p>For Guiding session all the participants of the group will be called to Jaranwala Offiece, where a proper guidance related to Ehram, Manasik and other related things will be given. Your Tickets, Passport and other related documents will be handed over to you in this sesison. In this session you can ask any related queries and any other document related questions. <br />
                            This session took place almost 1 week before leaving from Pakistan. At the end of the session a meal will also be served as a welcome sign.
                            </p>
                        </div>
                    </div>

                    {/* ------------------------------------------- */}

                    <div className={isNotMobile? styles.service_item : styles.mobile_service_item}>
                        <div className={isNotMobile?styles.service_item_content:styles.mobile_service_item_content}>
                        <img src={realtime.src} alt="img" />
                            <h1>Realtime Assistance</h1>
                            
                            <p>Our CEO, who understands the importance of personal engagement, believes in the power of hands-on guidance. To this end, they travel with the group or personally welcome the passengers at their destination to ensure a smooth transition into their spiritual journey. This unique approach allows for real-time support, fostering a deeper connection with the passengers and enabling a more fulfilling experience.
                            </p>
                        </div>
                    </div>

                </div>
        </div>
    )
}
