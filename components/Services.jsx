import React from 'react'
import styles from '../styles/Services.module.css'
// import transport from '../public/images/transport.svg'
// import zyarat from '../public/images/zyarat.svg'
// import guide from '../public/images/guide.svg'
// import realtime from '../public/images/realtime.svg'
import { useState, useEffect, useRef } from 'react'
export default function Services() {
    const [isNotMobile, setIsNotMobile] = useState(false);

    useEffect(() => {
        setIsNotMobile(window.innerWidth >= 760);
    })
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(sectionRef.current); // Stop observing once visible
          }
        },
        {
          threshold: 0.3, // Trigger when 30% of the section is in view
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
    return (
        <div>
            <div> <h1 className = {isNotMobile? styles.services_heading : styles.mobile_ser_heading}>Round-Trip Services</h1></div>
            <div> <small className = {styles.services_small}>SERVICES FOR GROUP TRAVELING</small></div>
           <div ref={sectionRef} className={isNotMobile ? styles.services_desktop : styles.services_mobile}>
                   
                    <div  className={`${isNotMobile?styles.service_item:styles.mobile_service_item} ${isVisible ? styles.visible : ''}`}>
                    <br /><br />
                        <div className={`${isNotMobile?styles.service_item_content:styles.mobile_service_item_content} ${isNotMobile? isVisible ? styles.visible : '': isVisible ? styles.animate : null}`}>
                            {/* <img src={transport.src} alt="img" /> */}
                         
                            <h1>Transport</h1>
                          
                            <p>Our transport services include seamless travel from the Main Office to Lahore Airport and from Jeddah Airport to the Makkah Hotel. We also provide transportation between the Makkah Hotel and the Medinah Hotel, covering both directions. Additionally, our services include the return journey from the Makkah Hotel to Jeddah Airport and from Lahore Airport back to the Main Office. To enhance your pilgrimage experience, we also offer Zyarat transport, ensuring a comfortable and well-organized journey throughout.</p>
                        </div>
                    </div>

                    {/* ------------------------------------------- */}

                    <div className={isNotMobile? styles.service_item : styles.mobile_service_item}>
                        <div className={`${isNotMobile?styles.service_item_content:styles.mobile_service_item_content} ${isNotMobile? isVisible ? styles.visible : '': isVisible ? styles.animate : null}`}>
                        {/* <img src={zyarat.src} alt="img" /> */}
                            <h1>Zyarat</h1>
                        <p>Our Zyarat services include visits to sacred and historically significant sites such as Baitullah Shareef and Masjid-e-Nabvi Shareef. We facilitate Hajj-related Zyarat and those associated with Hijrat-e-Nabvi. The journey also encompasses visits to Masjid-e-Qiblatain, Maidan-e-Badr, Maidan-e-Ohud, and Masjid-e-Quba. Additionally, we cover more than 10 other notable Zyarat locations, ensuring a spiritually enriching and comprehensive experience for our pilgrims.</p>
                        </div>
                    </div>

                     {/* ------------------------------------------- */}

                     <div className={isNotMobile? styles.service_item : styles.mobile_service_item}>
                        <div className={`${isNotMobile?styles.service_item_content:styles.mobile_service_item_content} ${isNotMobile? isVisible ? styles.visible : '': isVisible ? styles.animate : null}`}>
                        {/* <img src={guide.src} alt="img" /> */}
                            <h1>Guiding Session</h1>
                           
                            <p>For Guiding session all the participants of the group will be called to Main Office, where a proper guidance related to Ehram, Manasik and other related things will be given.  
                                {isNotMobile ? <p> Your Tickets, Passport and other related documents will be handed over to you in this sesison. In this session you can ask any related queries and any other document related questions. <br />
                                    This session took place almost 1 week before leaving from Pakistan. At the end of the session a meal will also be served as a welcome sign.</p>: null}
                            </p>
                        </div>
                    </div>

                    {/* ------------------------------------------- */}

                    <div className={isNotMobile? styles.service_item : styles.mobile_service_item}>
                        <div className={`${isNotMobile?styles.service_item_content:styles.mobile_service_item_content} ${isNotMobile? isVisible ? styles.visible : '': isVisible ? styles.animate : null}`}>
                        {/* <img src={realtime.src} alt="img" /> <br /> */}
                            <h1>Realtime Guide</h1>
                            
                            <p>Our COO, who understands the importance of personal engagement, travel with the group or personally welcome the passengers at their destination to ensure a smooth transition into their spiritual journey. {isNotMobile ? <p>This unique approach allows for real-time support, fostering a deeper connection with the passengers and enabling a more fulfilling experience.</p>:null}
                            </p>
                        </div>
                    </div>

                </div>
        </div>
    )
}
