import React, { useState, useEffect } from 'react';
import styles from '../styles/Notice.module.css';

export default function Notice() {
  const [isNotMobile, setIsNotMobile] = useState(false);

  useEffect(() => {
    setIsNotMobile(window.innerWidth >= 760);
  }, []);

  const groups = [
    {
      header: 'November 2024 Group',
      status: 'Completed',
      date: 'Landed on 28 Nov, 2024',
      description: 'Returned safely from Umrah, Alhamdulilah!',
    },
    {
      header: 'January 2025 Group',
      status: 'Completed',
      date: '19- 01- 2025',
      description: 'Returned safely from Umrah, Alhamdulilah!',
    },
    {
      header: 'Semi Ramadan Group',
      status: 'Returned',
      date: 'First week of Feb',
      description: 'First week of Ramadan was included in this group',
    },
    {
      header: 'Ramadan ul Mubarak Group',
      status: 'Returned',
      date: '-',
      description: 'Alhamdulilahi Returned on 20th Ramadan',
    },
    {
      header: 'Next Group',
      status: 'Not defined',
      date: 'No date announced',
      description: 'Due to Visa issues by Saudi Governement, still no date announced. Stay Tuned...',
    },
  ];

  return (
    <div>
     
        <div className={isNotMobile ? styles.tableContainer : styles.mobile_tableContainer}>
            <h2>Recent Timeline</h2>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={isNotMobile ? styles.th : styles.th_mobile}>Traveling</th>
                <th className={isNotMobile ? styles.th : styles.th_mobile}>Status</th>
               {isNotMobile ?  <th className={styles.th}>Associated Date</th>: null}
                <th className={isNotMobile ? styles.th : styles.th_mobile}>Description</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group, index) => (
                <tr
                  key={index}
                  className={group.status === 'Completed' ? styles.completedGroup : styles.openGroup}
                >
                  <td className={isNotMobile ? styles.td : styles.td_mobile}>{group.header}</td>
                  <td className={isNotMobile ? styles.td : styles.td_mobile}>{group.status}</td>
                 {isNotMobile ?  <td className={styles.td}>{group.date}</td> : null}
                  <td className={isNotMobile ? styles.td : styles.td_mobile}>{group.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
     
    </div>
  );
}
