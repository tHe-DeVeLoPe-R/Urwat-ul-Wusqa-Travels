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
      date: 'Landed on 28 Nov, 2023',
      description: 'Returned safely from Umrah, Alhamdulilah!',
    },
    {
      header: 'January 2025 Group',
      status: 'Closed',
      date: '19- 01- 2025',
      description: 'January Umrah Group is confirmed/closed and set for departure.',
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
