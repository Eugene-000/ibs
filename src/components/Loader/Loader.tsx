import React from "react";
import styles from './Loader.module.scss';

export const Loader: React.FC = () => {
    return (
        <div className={styles.mask}>
            <div className={styles.container}></div>
        </div>
    )
}

