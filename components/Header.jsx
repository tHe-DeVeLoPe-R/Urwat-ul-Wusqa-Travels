import styles from '../styles/Header.module.css'

import { useEffect, useState } from 'react';

export default function Header() {
  // Initialize state to hold media query result
  const [isNotMobile, setIsNotMobile] = useState(false);

  // Run the media query logic only on the client side
  useEffect(() => {
    setIsNotMobile(window.innerWidth >= 600); // Check for screen width on client side
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <header>
      <div className={styles.header_main}>
        {isNotMobile ? (
          <div className={styles.header_content}>
            <h1 className={styles.header_title}>
              Urwat il Wusqa — Your Gateway to Umrah
            </h1>
            <h3 className={styles.header_subtitle}>
              "Embark on a Spiritual Journey Like Never Before"
            </h3>
            <button className={styles.cta_button}>Explore Packages</button>
          </div>
        ) : (
          <div className={styles.header_main} />
        )}
      </div>
    </header>
  );
}
