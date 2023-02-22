import React from "react";
import styles from "./ItemInfo.module.scss";
import { SERVER_URL } from "../../../../constants/routes";
import { Modal } from "../../../../components/Modal/Modal";
import { Loader } from "../../../../components/Loader/Loader";
import { Counter } from "../../../../components/Counter/Counter";
import { ButtonFavourite } from "../../../../components/ButtonFavourite/ButtonFavourite";
import { IItem } from "../../../../models/items";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useAction";

interface IProps {
  item: IItem | null;
  isLoading: boolean;
  error: string | null;
}

export const ItemInfo: React.FC<IProps> = ({item, isLoading, error}) => {
  const {visible} = useTypedSelector(state => state.modal);
  const {setInvisible} = useActions();

  const handleCloseModal = () => {
    setInvisible();
  };

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      <Modal
        open={visible}
        text={error}
        title="Error Handling"
        handleCloseModal={handleCloseModal}
      />
      {item && (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <div className={styles.gradientContainer}></div>
            <img
              src={SERVER_URL + item.picture.path}
              alt={item.picture.alt}
              className={styles.img}
            />
          </div>
          <div className={styles.infoContainer}>
            <span className={styles.title}>{item.name}</span>
            <p className={styles.info}>{item.info}</p>
            <span className={styles.detailsTitle}>Details</span>
            <p className={styles.details}>{item.details}</p>
            <div className={styles.addToCartContainer}>
              <div className={styles.priceContainer}>
                <span className={styles.price}>
                  {item.price.value} {item.price.currency}
                </span>
                <Counter />
              </div>
              <div className={styles.addBtnFavouriteContainer}>
                <button type="button" className={styles.cartBtn}>
                  Add to cart
                </button>
                <div className={styles.favouriteContainer}>
                  <ButtonFavourite like={item.like} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
