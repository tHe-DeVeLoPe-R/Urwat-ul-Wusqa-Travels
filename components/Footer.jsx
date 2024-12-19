import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          
          {/* Company Info Section */}
          <div className={styles.footer_section}>
            <h2 className={styles.footer_title}>About Us</h2>
            <p className={styles.footer_text}>
              Our company is dedicated to providing the best services in the industry. We prioritize customer satisfaction and quality in all our offerings.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className={styles.footer_section}>
            <h2 className={styles.footer_title}>Quick Links</h2>
            <ul className={styles.footer_links}>
              <li><a href="/">Home</a></li>
              <li><a href="/packages">Packages</a></li>
              <li><a href="/custompackage">PackageCalculator</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className={styles.footer_section}>
            <h2 className={styles.footer_title}>Contact Us</h2>
            <ul className={styles.footer_contact}>
              <li><strong>Email:</strong> <a href="mailto:zafarkel1056@gmail.com">zafarkel1056@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+923004965615">+92 300 4965 615</a></li>
              <li><strong>Address:</strong> First floor, Ali Plaza, Jaranwala, Faisalabad, Pakistan</li>
            </ul>
          </div>

        
        </div>

        {/* Legal Section */}
        <div className={styles.footer_legal}>
          <p>&copy; 2024 Urwat il Wusqa. All Rights Reserved.</p>
          <p>Company License #8488 | Main Office: Ali Plaza, Jaranwala, Faisalabad, Pakistan</p>
          <ul className={styles.footer_legal_links}>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-conditions">Terms & Conditions</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
