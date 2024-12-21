import React from 'react'
import styles from '../styles/Calculator.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Calculator() {
    const router = useRouter();
    const [isNotMobile, setIsNotMobile] = useState(false);
    useEffect(() => {
      setIsNotMobile(window.innerWidth >= 760);
    });
  
    return (
      <div>
        
            <div className={isNotMobile? styles.desktop_calculator: styles.mobile_calculator}>
              <div className={isNotMobile?styles.column:styles.mobile_column}>
                <h1>Create Package</h1>
              </div>
  
             {isNotMobile ?  <div className={styles.line}><span>.</span></div> : null}
             
  
              <div className={isNotMobile? styles.column: styles.mobile_column}>
                <p>
                Plan your perfect Umrah journey with ease using our Umrah Package Calculator. This unique feature allows you to create a custom Umrah package tailored to your specific needs and preferences. Simply input your requirements, such as the number of travelers, accommodation preferences, and our calculator will provide a detailed cost estimate for current date. 
                </p>
                <div className={isNotMobile? styles.custom_package: styles.mobile_custom_package}> <button className= {isNotMobile ? styles.cta_button : styles.mobile_cta_button} onClick={()=>router.push('/custompackage')} >Package Calculator</button></div>
              </div>
            
            </div>
          
      </div>
    );
}
