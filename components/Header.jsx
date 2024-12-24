import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Header() {
  // Initialize state to hold media query result
  const [isNotMobile, setIsNotMobile] = useState(false);

  // Run the media query logic only on the client side
  useEffect(() => {
    setIsNotMobile(window.innerWidth >= 760); // Check for screen width on client side
  }, []); // Empty dependency array means this effect runs only once when the component mounts
  const router = useRouter()
  return (
    <header>
      <div className={isNotMobile ? styles.header_main : styles.mobile_header_main}>
       
          <div className={styles.header_content}>
            <h1 className={isNotMobile ? styles.header_title : styles.mobile_header}>
              Urwat ul Wusqa — Your Gateway to Umrah
            </h1>
            <h3 className={styles.header_subtitle}>
              "Embark on a Spiritual Journey Like Never Before"
            </h3>
            <button onClick={()=>router.push('/packages')} className={isNotMobile ? styles.cta_button : styles.mobile_cta_button}>Explore Packages</button> <br /> <br />
            <button onClick={()=>router.push('/guide')} className={isNotMobile ? styles.cta_button : styles.mobile_cta_button}>Umrah Guide Steps</button>
          </div>
        
      </div>
    </header>
  );
}
