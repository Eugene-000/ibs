import React from "react";
import styles from './Header.module.scss';
import imgCart from '../../assets/images/cart_icon.svg';
import imgProfile from '../../assets/images/profile_icon.svg';
import { Search } from "../Search/Search";
import { PATH_INDEX } from "../../constants/routes";

interface IProps {
    handleSearch: (value: string) => void;
}

export const Header: React.FC<IProps> = ({handleSearch}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Search handleSearch={handleSearch}/>
                <div className={styles.icons}>
                    <a href={PATH_INDEX} className={styles.icon}>
                        <img src={imgCart} alt="Cart"/>
                    </a>
                    <a href={PATH_INDEX} className={[styles.icon, styles.iconProfile].join(' ')}>
                        <img src={imgProfile} alt="Profile"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
