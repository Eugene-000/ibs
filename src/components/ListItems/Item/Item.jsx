import React from "react";
import styles from './Item.module.scss';
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../../constants";

export function Item({item}) {
  return (
    <div className={styles.item}>
        {item.like
            ? <button type="button" className={[styles.favouriteBtn, styles.active].join(' ')}></button>
            : <button type="button" className={[styles.favouriteBtn, styles.nonActive].join(' ')}></button>
        }
        <Link className={styles.linkItem} to={`/${item.id}`}>
            <div className={styles.imgContainer}>
                <img src={SERVER_URL + item.picture.path} alt={item.picture.alt} className={styles.img}/>
            </div>
            <span className={styles.title}>{item.name}</span>
            <span className={styles.price}>{item.price.value} {item.price.currency}</span>
        </Link>
    </div>
  )
}
