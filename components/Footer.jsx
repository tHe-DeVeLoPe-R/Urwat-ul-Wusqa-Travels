import React from 'react';
import styles from '../styles/Footer.module.css';
import wa from '../public/images/wa.svg';
import imo from '../public/images/imo.svg';
import gmail from '../public/images/gmail.svg';
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
              <li><img className= {styles.f_img} src={gmail.src} alt="whatsapp" /> <a href="mailto:zafarkel1056@gmail.com">zafarkel1056@gmail.com</a></li>
              <li>
                <img className= {styles.f_img} src={wa.src} alt="whatsapp" />
              <a href={`https://wa.me/+923004965615`}>+92 300 4965 615</a></li>
              <li>
                <img className= {styles.f_img} src={wa.src} alt="whatsapp" />
              <a href={`https://wa.me/+923265416017`}>+92 326 5416 017</a></li>

              <li>
                <img className= {styles.f_img} src={imo.src} alt="whatsapp" />
              +92 304 7922 787</li>
              <li><strong>Address:</strong> First floor, Ali Plaza, Jaranwala, Faisalabad, Pakistan</li>
            </ul>
          </div>

        
        </div>

        {/* Legal Section */}
        <div className={styles.footer_legal}>
          <p>&copy; 2024 Urwat ul Wusqa. All Rights Reserved.</p>
          <p>Company License #8488 | Main Office: Ali Plaza, Jaranwala, Faisalabad, Pakistan</p>
          <ul className={styles.footer_legal_links}>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-conditions">Terms & Conditions</a></li>
            
          </ul>
          <h3>Find us on Map</h3>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.8116938954295!2d73.41621817625042!3d31.336573174298742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39227f209993df4f%3A0xd297765b3b58f0c4!2sAli%20Plaza!5e0!3m2!1sen!2s!4v1734689325952!5m2!1sen!2s" 
        width="70%" 
        height="250px" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
        </div>
      </footer>
    </>
  );
}
