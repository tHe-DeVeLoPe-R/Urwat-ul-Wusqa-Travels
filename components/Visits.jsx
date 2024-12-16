import React from 'react'
import { useEffect, useState } from 'react';
import styles from '../styles/Visits.module.css'
import Makkah from '../public/images/Makkah.png'
import Jablerehmat from '../public/images/jablerehmat.png'
import Mina from '../public/images/mina.png'
import Sour from '../public/images/sour.png'
import Muala from '../public/images/muala.png'
import Nimra from '../public/images/nimra.png'
import Medinah from '../public/images/MEDINAH.jpeg'
import Quba from '../public/images/quba.png'
import Kiblatain from '../public/images/kiblatain.png'
import Ohud from '../public/images/Ohud.png'
import Baqee from '../public/images/Baqee.png'
import Badr from '../public/images/badr.png'
export default function Visits() {
    const [isNotMobile, setIsNotMobile] = useState(false);
    useEffect(() => {
        setIsNotMobile(window.innerWidth >= 760);
    });
    return (
        <div>
           

                    <div className={styles.desktop_visit}>
                        <h1>Key Visits</h1>
                        <small>Here are few of those spots, we are going to visit in our <b>Zyarat</b> </small>
                        <div className={isNotMobile ? styles.visit_columns:styles.mobile_visit_columns}>

                            <div className={`${isNotMobile ? styles.column : styles.mobile_column} ${styles.visit_images}`}>
                                <div>
                                    <img className={`${styles.visit_image}`} src={Makkah.src} alt="Makkah" />
                                    <p>BAITULLAH Sharif</p>
                                </div>
                                {/* -------------------------- */}
                                <div>
                                    <img className={styles.visit_image} src={Jablerehmat.src} alt="Jablerehmat" />
                                    <p>Jabal e Rehmat</p>
                                </div>
                                {/* ------------------- */}
                                <div>
                                    <img className={styles.visit_image} src={Mina.src} alt="mina" />
                                    <p>Mina</p>
                                </div>
                                {/* ------------------- */}
                                <div>
                                    <img className={styles.visit_image} src={Sour.src} alt="mina" />
                                    <p>Jabl e Sour</p>
                                </div>
                                {/* ------------------- */}
                                <div>
                                    <img className={styles.visit_image} src={Muala.src} alt="muala" />
                                    <p>Jannat Ul Muala</p>
                                </div>
                                {/* ------------------- */}
                                <div>
                                    <img className={styles.visit_image} src={Nimra.src} alt="muala" />
                                    <p>Masjid Nimra</p>
                                </div>
                                {/* ------------------- */}
                            </div>

                            {/* Vertical line */}
                            <div className={isNotMobile?styles.line:styles.mobile_line}><span>.</span></div>
                            {/* MEDINAH */}
                            <div className={`${isNotMobile ? styles.column : styles.mobile_column} ${styles.visit_images}`}>

                                <div>
                                    <img className={`${styles.visit_image}`} src={Medinah.src} alt="Makkah" />
                                    <p>Haram Shareef</p>
                                </div>
                                {/* -------------------------- */}
                                <div>
                                    <img className={styles.visit_image} src={Quba.src} alt="Jablerehmat" />
                                    <p>Masjid E Quba</p>
                                </div>
                                {/* ------------------- */}
                                <div>
                                    <img className={styles.visit_image} src={Kiblatain.src} alt="mina" />
                                    <p>Masjid E Kiblatain</p>
                                </div>
                                {/* ------------------- */}
                                <div>
                                    <img className={styles.visit_image} src={Ohud.src} alt="mina" />
                                    <p>Jabl e Ohud</p>
                                </div>
                                {/* ------------------- */}

                                <div>
                                    <img className={styles.visit_image} src={Baqee.src} alt="muala" />
                                    <p>Jannat Ul Baqee</p>
                                </div>
                                {/* ------------------- */}
                                <div>
                                    <img className={styles.visit_image} src={Badr.src} alt="muala" />
                                    <p>Maidan E Badr</p>
                                </div>
                                {/* ------------------- */}
                            </div>
                        </div>
                    </div>
                
        </div>
    )
}
