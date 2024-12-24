import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../styles/UmrahGuide.module.css'
import guideheader from '../public/images/guideheader.jpg'
import ehram from '../public/images/ehram.png'
import nawafil from '../public/images/nawafil.png'
import talbeeh from '../public/images/talbeeh.jpg'
import iztibah from '../public/images/iztibah.jpg'
import tawafgif from '../public/images/tawaf.gif'
import mataf from '../public/images/tawaf2.jpg'
import istlam from '../public/images/istlam.jpg'
import tawafnawafil from '../public/images/tawafnawafil.jpg'
import saei from '../public/images/saei.jpg'
import zamzam from '../public/images/zamzam.jpg'
import headshave from '../public/images/headshave.jpg'

export default function UmrahGuide() {
    const [isNotMobile, setIsNotMobile] = useState(false);

    useEffect(() => {
        setIsNotMobile(window.innerWidth >= 760);
    })

    const guide_steps = [
        {
            'step': 'STEP 1',
            'heading': 'Ehram',
            'guide': 'Do ghusal from home then reach airport. Do ablution and Wear Ehram at the Airport from which you are departing',
            'image': ehram,
        },
        {
            'step': 'STEP 2',
            'heading': 'Nawafil',
            'guide': 'Perform 2 rakat nawafil for tahaiyat ul ehram after wearing ehram.',
            'image': nawafil,
        },
        {
            'step': 'STEP 3',
            'heading': 'Say Talbeeh',
            'guide': 'Now start saying Talbeeh time to time. Saying at-least 3 times is must.',
            'image': talbeeh,
        },
        {
            'step': 'Remeber this',
            'heading': 'Mataf Structure',
            'guide': 'Before starting tawaf remeber this structure of Mataf (Haram E Kaaba). This structure will help you in guiding the position of Hijre Aswad, Muqam E Ibrahim, Zam Zam Water, Safa & Marwa and other important things. On each step if you think you are not understanding then again see this structure.',
            'image': mataf,
        },
        {
            'step': 'STEP 4',
            'heading': 'Do Iztibah',
            'guide': 'After reaching Mataf make your right shoulder out of ehram as shown below.',
            'image': iztibah,
        },
        {
            'step': 'STEP 5',
            'heading': 'Tawaf E Kaaba',
            'guide': 'Now after doing iztibah you will ready for Tawaf. Tawaf has 7 rounds around Baitullah Shareef and each round will start from Hijr e Aswad after doing Istlam and each round will ends at Hijr e Aswad after Istlam. If you find proper space then you can do Ramal (Move With Proud Like Wrestlers) in first 3 rounds. So it will contain 7 rounds and 8 times Istlam. Like you should finish 7th round after saying Istlam. We will see what is Istlam in next step.',
            'image': tawafgif,
        },
        {
            'step': 'STEP 6',
            'heading': 'Do Istlam',
            'guide': 'While tawaf rounds when you reach in front of Hijr e Aswad you are required to do Istlam. Due to huge gathering around Hijr e Aswad it is allowed to say Bismillah Allah Ho Akbar by pointing both hands towrds Hijre Aswad. It is where your round of tawaf will start and end. You will also see a green light on your right side when you reach close to Hijre Aswad Corner that green light shows that you are in front of Hihre Aswad now.',
            'image': istlam,
        },
        {
            'step': 'STEP 7',
            'heading': 'Nawafil',
            'guide': 'After completing your Tawaf as mentioned in previous step. Cover your both shoulders with ehram because now you have to pray 2 Nawafil for Tahaiyat ul Tawaf like you did for Tahaiyat ul Ehram. You should try to perform these Nawafil in front of Muqam E Ibrahim. If you do not find space you can pray any where around',
            'image': tawafnawafil,
        },
        {
            'step': 'STEP 8',
            'heading': 'Drink Zam Zam',
            'guide': 'After completing Tawaf Nawafil You can go towards Safa & Marwa side where you will see Zam Zam water coolers. Drink Zam Zam from there as it is Sunnah. After drinking Zam Zam we will move towards Safa & Marwa for Saei',
            'image': zamzam,
        },
        {
            'step': 'STEP 9',
            'heading': 'Safa & Marwa',
            'guide': 'Now you have to do saei which means complete 7 rounds around Safa & Marwa. These rounds would be counted like from Safa to Marwa it will be 1 then from Marwa to safa it will be 2 like this you have to complete 7 rounds.There will be a green lighted area in which men have to run with slow speed (move like run). Finally, you will start from Safa and your 7th round will complete at Marwa',
            'image': saei,
        },
        {
            'step': 'STEP 10',
            'heading': 'Nawafil',
            'guide': 'Now you have completed Safa & Marwa portion. It is good to perform 2 nawafil of Shukr. As your last round will complete at Marwa you can pray 2 nawafil there where you find space.',
            'image': nawafil,
        },
        {
            'step': 'STEP 11',
            'heading': 'Shave your head',
            'guide': 'Now you have completed all the Manasik that one needs to perform inside boundary of Mataf (Haram E Kaaba). Now if you want you can stay there as much time as you want or you can leave immediately to shave your head. Do not remove ehram yet. Go to the barber shop outside and shave your head. It is the last manasik. Remeber you have to shave your head wether you have hair on it or not.',
            'image': headshave,
        },
    ]
    return (
        <div className={isNotMobile ? styles.desktop_guide : styles.mobile_guide}>
            <div className={isNotMobile ? styles.desktop_guide_header : styles.mobile_guide_header}>
                <h1>"Umrah Guide"</h1>
                <h4>Below is the step by step guide to perform Umrah</h4>
                <p>Images and the texts are placed in the correct sequence , so you need to follow steps in the sequence they are given. Moreover, you are not restricted to have dua in Arabic only while tawaf. You can dua in any language you know.</p>

            </div>
            <div className={isNotMobile ? styles.desktop_guide_steps : styles.mobile_guide_steps}>
                <div className={isNotMobile ? styles.desktop_guide_step : styles.mobile_guide_step}>
                    <h3 className={isNotMobile ? styles.desktop_guide_step_heading : styles.mobile_guide_step_heading}>How to Wear Ehram ?</h3>
                    <p>Before starting we should know how to wear Ehram</p>
                    <iframe className={isNotMobile ? styles.desktop_guide_video : styles.mobile_guide_video} src="https://www.youtube.com/embed/vZhtwyhjcPA?si=r-E9xnKpCmwi6mwX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <br />
                {
                    guide_steps.map((step, index)=>(
                        <div className={isNotMobile ? styles.desktop_guide_step : styles.mobile_guide_step}>
                            <strong>{step.step}</strong>
                             <h1>{step.heading}</h1>
                             <p>{step.guide}</p>
                             <img src={step.image.src} alt="" />
                        </div>
                       
                    ))
                }
                <strong className = {styles.complete_msg}>Now Our Umrah is completed and you can chnage Ehram and live in your normal clothes. Now you are out of Ehram restrictions.</strong>

                <h1 className={styles.women_differ}>Differences for Women</h1>
                <div className={styles.women_differ_list}>
                  <ul>
                    <li>
                        Any normal cloth that covers them entirely is their Ehram. They are not supposed to wear like men.
                    </li>
                    <li>
                        They are not supposed to do Iztibah. Keep themselves completely covered throughout Umrah.
                    </li>
                    <li>
                        They are not supposed to do Ramal.
                    </li>
                    <li>
                        In Safa & Marwa they are not supposed to run in green light areas.
                    </li>
                    <li>
                        They are not supposed to shave complete heads. Just cut almost 0.5 - 0.8cm of hair from bottom.
                    </li>
                  </ul>
                </div>
                <h1 className= {styles.not_to_do}>Things Not To Do</h1>
                <div className={isNotMobile ? styles.not_to_do_desktop : styles.not_to_do_mobile}>
                  <ul>
                    <li>
                        Do not use any Fregnance after you wear Ehram
                    </li>
                    <li>
                        Even do not use soap after wearing Ehram. As soap contains fregnance.
                    </li>
                    <li>
                        Do not use foul language with anyone
                    </li>
                    <li>
                        Do not enter Mataf without ablution.
                    </li>
                    <li>
                        Redo ablution if required and start tawaf from where you left off. But remeber start again from Hijr e Aswad.
                    </li>
                    <li>
                        While doing Tawaf for Umrah do not touch Kiswaa (Ghulaaf e Kaaba). Also do not touch Hijre Aswad just do Istlam. Both of them contains fregrances.
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    )
}
