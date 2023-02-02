import React from "react";
import styles from './Header.module.scss';
import imgCart from '../../assets/images/cart_icon.svg';
import imgProfile from '../../assets/images/profile_icon.svg';
import { Search } from "../Search/Search";

export const Header = ({handleSearch}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Search handleSearch={handleSearch}/>
                <div className={styles.icons}>
                    <a href="/" className={styles.icon}>
                        <img src={imgCart} alt="Cart"/>
                    </a>
                    <a href="/" className={[styles.icon, styles.iconProfile].join(' ')}>
                        <img src={imgProfile} alt="Profile"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
