import React from "react";
import styles from "./Item.module.scss";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../../../../../constants/routes";
import { ButtonFavourite } from "../../../../../../components/ButtonFavourite/ButtonFavourite";

export function Item({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.favouriteContainer}>
        <ButtonFavourite like={item.like} />
      </div>
      <Link className={styles.linkItem} to={`/${item.id}`}>
        <div className={styles.imgContainer}>
          <img
            src={SERVER_URL + item.picture.path}
            alt={item.picture.alt}
            className={styles.img}
          />
        </div>
        <span className={styles.title}>{item.name}</span>
        <span className={styles.price}>
          {item.price.value} {item.price.currency}
        </span>
      </Link>
    </div>
  );
}
