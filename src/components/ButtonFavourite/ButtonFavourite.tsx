import React from 'react';
import styles from './ButtonFavourite.module.scss';

interface IProps {
  like: boolean;
}

export const ButtonFavourite: React.FC<IProps> = ({like}) => {
  return (
    <button type="button" className={[styles.favouriteBtn, like ? styles.active : styles.nonActive].join(' ')}></button>
  )
}
