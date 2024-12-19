import Nav from '@/components/Nav'
import React from 'react'
import styles from '../styles/Packages.module.css'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

export default function packages() {

  const [isNotMobile, setIsNotMobile] = useState(false);

  useEffect(()=>{
    setIsNotMobile(window.innerWidth >= 760);
  })
  const packages = [
    {
      'Name': 'Economy',
      'Days': '21 days',
      'MakkahDist': '900/1100m',
      'MedinahDist': '700/900m',
      'DeptDate': '11-01-2025',
      'ApproxTime': '(18-22 minute walk)',
      'Price': '220,000 pkr.',
    },
    {
      'Name': 'Economy Plus',
      'Days': '21 days',
      'MakkahDist': '500/700m',
      'MedinahDist': '500/600m',
      'ApproxTime': '(10-12 minute walk)',
      'DeptDate': '11-01-2025',
      'Price': '243,000 pkr.',
    },
    {
      'Name': 'Premium',
      'Days': '21 days',
      'MakkahDist': '300/400m',
      'MedinahDist': '250/300m',
      'ApproxTime': '(05-07 minute walk)',
      'DeptDate': '11-01-2025',
      'Price': '297,000 pkr.',
    },

  ]
  const specificHotelMsg = 'I need to have a specifi hotel. How can you help?';
  return (
    <div className={styles.package_main}>
      <Nav />
      <div>
        <h1 className={isNotMobile ? styles.package_heading: styles.mobile_package_heading} >Umrah Packages</h1>
        <small>Following are ongoing packages</small>
      </div>
      <div className={isNotMobile ? styles.package_cards : styles.mobile_package_cards}>
        {
          packages.map((item, index) => (
            <div key={index} className={styles.package_card}>
              <h1>{item.Name}</h1>
              <strong className={styles.package_content}>Makkah Moazma: {item.MakkahDist}</strong>
              <strong className={styles.package_content}>Medina Munawra: {item.MakkahDist}</strong>
              <strong className={styles.package_content}>Approx Time: {item.ApproxTime}</strong>
              <strong className={styles.package_content}>Duration: {item.Days}</strong>
              <strong className={styles.package_content}>Departure: {item.DeptDate}</strong>
              <strong className={styles.package_content}>Price: {item.Price}</strong>
              <a
                href={`https://wa.me/+923004965615?text=Hello%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(item.Name)}%20Umrah%20Package`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.whatsapp_button}>Discuss Package</button>
              </a>

            </div>
          ))
        }

      </div>
      <div className={isNotMobile? styles.custom_package: styles.mobile_custom_package}> <button className= {isNotMobile ? styles.cta_button : styles.mobile_cta_button} onClick={null}>Package Calculator</button></div>
      <div className={isNotMobile? styles.custom_package: styles.mobile_custom_package}> Need any specific Hotel? &nbsp;
      <a 
        href={`https://wa.me/+923004965615`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tell us
      </a>
      </div>

      <Footer />
    </div>

  )
}
