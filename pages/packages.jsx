import Nav from '@/components/Nav'
import React from 'react'
import styles from '../styles/Packages.module.css'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
export default function packages() {

  const [isNotMobile, setIsNotMobile] = useState(false);
  const router = useRouter()
  useEffect(()=>{
    setIsNotMobile(window.innerWidth >= 760);
  })
  const packages = [
    {
      'Name': 'Economy',
      'Days': '21 days',
      'MakkahDist': '700/900m',
      'MedinahDist': '600/700m',
      'DeptDate': 'July, 2nd Week',
      'ApproxTime': '(13-16 minute walk)',
      'Price': '2,30,000 pkr.',
    },
    {
      'Name': 'Economy Plus',
      'Days': '21 days',
      'MakkahDist': '400/600m',
      'MedinahDist': '400/500m',
      'ApproxTime': '(08-10 minute walk)',
      'DeptDate': 'July, 2nd Week',
      'Price': '247,000 pkr.',
    },
    {
      'Name': 'Premium',
      'Days': '21 days',
      'MakkahDist': '300/400m',
      'MedinahDist': '250/350m',
      'ApproxTime': '(05-07 minute walk)',
      'DeptDate': 'July, 2nd Week',
      'Price': '290,000 pkr.',
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
            <div key={index} className={`${styles.package_card} ${item.Name === 'Economy' ? styles.economy: item.Name === 'Economy Plus' ? styles.economy_plus : styles.premium}`}>
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
      <div className={isNotMobile? styles.custom_package: styles.mobile_custom_package}> <button className= {isNotMobile ? styles.cta_button : styles.mobile_cta_button} onClick={()=>router.push('/custompackage')} >Package Calculator</button></div>
      <div className={isNotMobile? styles.custom_package: styles.mobile_custom_package}> Need any specific Service? &nbsp;
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
