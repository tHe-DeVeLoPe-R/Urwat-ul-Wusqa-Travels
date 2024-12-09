import React, { useState } from 'react';
import styles from '../styles/Nav.module.css';
import { useEffect } from 'react';

export default function Nav() {
  // Initialize state to hold media query result
  const [isNotMobile, setIsNotMobile] = useState(false);

  // Run the media query logic only on the client side
  useEffect(() => {
    setIsNotMobile(window.innerWidth >= 600); // Check for screen width on client side
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className={`${isNotMobile ? styles.nav_web : styles.nav}`}>
        {/* Company Name on the Left */}
        <div className={styles.companyName}>Urwat il Wusqa</div>

        {/* Navigation Links on the Right */}

        {isNotMobile ? (
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="">Home</a></li>
            <li className={styles.navItem}><a href="">Packages</a></li>
            <li className={styles.navItem}><a href="">Announcements</a></li>
            <li className={styles.navItem}><a href="">Contact</a></li>
            <li className={styles.navItem}><a href="">About</a></li>
          </ul>
        ) : (
          <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        )}

      </nav>

      <div className={`${styles.sideMenu} ${menuOpen ? styles.sideMenu_open : styles.sideMenu_closed}`}>
        <ul>
          <li className={styles.sideMenuItem}><a href="">Home</a></li>
          <li className={styles.sideMenuItem}><a href="">Packages</a></li>
          <li className={styles.navItem}><a href="">Announcements</a></li>
          <li className={styles.sideMenuItem}><a href="">Contact</a></li>
          <li className={styles.sideMenuItem}><a href="">About</a></li>
        </ul>
      </div>
    </div>
  );
}
