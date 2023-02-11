import React from 'react';
import styles from './Counter.module.scss';

export const Counter: React.FC = () => {
  return (
    <div className={styles.container}>
        <button type="button" className={styles.remove}></button>
        <input type="text" className={styles.number} id="count" defaultValue="1"/>
        <button type="button" className={styles.add}></button>
    </div>
  )
}
