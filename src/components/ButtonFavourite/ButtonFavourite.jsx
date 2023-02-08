import React from 'react'
import styles from './ButtonFavourite.module.scss';

export const ButtonFavourite = ({like}) => {
  return (
    <button type="button" className={[styles.favouriteBtn, like ? styles.active : styles.nonActive].join(' ')}></button>
  )
}
