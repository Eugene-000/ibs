import React from "react";
import styles from "./Item.module.scss";
import { Link } from "react-router-dom";
import { SERVER_URL, PATH_DETAILED } from "../../../../../../constants/routes";
import { ButtonFavourite } from "../../../../../../components/ButtonFavourite/ButtonFavourite";
import { IItem } from "../../../../../../models/items";

interface IProps {
  item: IItem;
}

export const Item: React.FC<IProps> = ({ item }) => {

  const createDetailedPath = (id: string) => PATH_DETAILED.replace(':id', id);

  return (
    <div className={styles.item}>
      <div className={styles.favouriteContainer}>
        <ButtonFavourite like={item.like} />
      </div>
      <Link className={styles.linkItem} to={createDetailedPath(item.id)}>
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
