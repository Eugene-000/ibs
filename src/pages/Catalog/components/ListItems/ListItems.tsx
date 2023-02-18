import React from "react";
import styles from "./ListItems.module.scss";
import { Item } from "./components/Item/Item";
import { Loader } from "../../../../components/Loader/Loader";
import { Modal } from "../../../../components/Modal/Modal";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useAction";
import { IItem } from "../../../../models/items";

interface IProps {
  items: Array<IItem> | null,
  isLoading: boolean,
  error: string | null
}

export const ListItems: React.FC<IProps> = ({ items, isLoading, error }) => {

  const {visible} = useTypedSelector(state => state.modal);
  const {setInvisible} = useActions();

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      <Modal
        open={visible}
        text={error}
        title="Error Handling"
        handleCloseModal={setInvisible}
      />
      <div className={styles.container}>
        {items && items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
