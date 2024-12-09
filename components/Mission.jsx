import styles from '../styles/Mission.module.css'
import { useEffect, useState } from 'react';

export default function Mission() {

  const [isNotMobile, setIsNotMobile] = useState(false);
  useEffect(() => {
    setIsNotMobile(window.innerWidth >= 600);
  });

  return (
    <div>
      {
        isNotMobile ? (
          <div className={styles.desktop_mission}>
            <div className={styles.column}>
              <h1>Our Mission</h1>
            </div>

            {/* Vertical line */}
            <div className={styles.line}><span>.</span></div>

            <div className={styles.column}>
              <p>
                At Urwat il Wusqa, our mission is to provide an unparalleled experience for every Umrah passenger, ensuring their journey is as smooth and comfortable as possible. We understand the deep spiritual significance of Umrah and strive to alleviate any stress or concerns during the trip by offering exceptional support at every stage. From the moment the group begins their travels, our team is dedicated to providing personalized assistance, addressing each passenger’s unique needs and ensuring their safety and well-being. <br />

                Our CEO, who understands the importance of personal engagement, believes in the power of hands-on guidance. To this end, they travel with the group or personally welcome the passengers at their destination to ensure a smooth transition into their spiritual journey. This unique approach allows for real-time support, fostering a deeper connection with the passengers and enabling a more fulfilling experience.
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )
      }
    </div>
  );
}
