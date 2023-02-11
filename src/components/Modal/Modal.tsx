import React from "react";
import styles from './Modal.module.scss';

interface IProps {
    text: string | null;
    title: string | null;
    handleCloseModal: () => void;
}

export const Modal: React.FC<IProps> = ({text, title, handleCloseModal}) => {
    return (
        <div className={styles.mask}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <p className={styles.title}>{title}</p>
                    <button onClick={handleCloseModal} className={styles.closeBtn}>Close</button>
                </div>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}

