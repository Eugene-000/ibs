import React, { useEffect, useState } from "react";
import styles from './ItemInfo.module.scss';
import { SERVER_URL } from "../../constants";
import { useParams } from "react-router-dom";
import { Modal } from "../UI/Modal/Modal";
import { Loader } from "../UI/Loader/Loader";
import { ItemApi } from "../../API/itemApi";
import { useFetching } from "../../hooks/useFetching";
import { Counter } from "../UI/Counter/Counter";

export const ItemInfo = () => {
    const { id } = useParams();

    const [item, setItem] = useState(null);
    const [getItem, isLoading, error] = useFetching(async () => {
        const item = await ItemApi.getItem(id);
        setItem(item)
    })
    const [visibleModal, setVisibleModal] = useState(false);

    useEffect(() => {
        getItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCloseModal = () => {
        setVisibleModal(false);
    }

    useEffect(() => {
        if (error) {
            setVisibleModal(true);
        }
    }, [error])

    return (
        <div className={styles.wrapper}>
            {isLoading && <Loader />}
            {visibleModal && <Modal text={error} title="Error Handling" handleCloseModal={handleCloseModal}/>}
            {item && 
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <div className={styles.gradientContainer}></div>
                    <img src={SERVER_URL + item.picture.path} alt={item.picture.alt} className={styles.img}/>
                </div>
                <div className={styles.infoContainer}>
                    <span className={styles.title}>{item.name}</span>
                    <p className={styles.info}>{item.info}</p>
                    <span className={styles.detailsTitle}>Details</span>
                    <p className={styles.details}>{item.details}</p>
                    <div className={styles.addToCartContainer}>
                        <div className={styles.priceContainer}>
                            <span className={styles.price}>{item.price.value} {item.price.currency}</span>
                            <Counter />
                        </div>
                        <div className={styles.favouriteContainer}>
                            <button type="button" className={styles.cartBtn}>Add to cart</button>
                            {item.like
                                ? <button type="button" className={[styles.favouriteBtn, styles.active].join(' ')}></button>
                                : <button type="button" className={[styles.favouriteBtn, styles.nonActive].join(' ')}></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

