import React, { useEffect, useState } from "react";
import styles from "./ItemInfo.module.scss";
import { SERVER_URL } from "../../../../constants/routes";
import { Modal } from "../../../../components/modal/Modal";
import { Loader } from "../../../../components/loader/Loader";
import { Counter } from "../../../../components/counter/Counter";
import { ButtonFavourite } from "../../../../components/buttonFavourite/ButtonFavourite";

export const ItemInfo = ({item, isLoading, error}) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  useEffect(() => {
    if (error) {
      setVisibleModal(true);
    }
  }, [error]);

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      {visibleModal && (
        <Modal
          text={error}
          title="Error Handling"
          handleCloseModal={handleCloseModal}
        />
      )}
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
