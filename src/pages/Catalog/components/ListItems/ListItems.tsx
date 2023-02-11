import styles from "./ListItems.module.scss";
import { Item } from "./components/Item/Item";
import { Loader } from "../../../../components/Loader/Loader";
import { Modal } from "../../../../components/Modal/Modal";
import { useEffect } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useAction";
import { IItems } from "../../../../models/items";

interface IProps {
  items: Array<IItems> | null,
  isLoading: boolean,
  error: string | null
}

export const ListItems: React.FC<IProps> = ({ items, isLoading, error }) => {

  const {visible} = useTypedSelector(state => state.modal);
  const {modal__setInvisible, modal__setVisible} = useActions();

  const handleCloseModal = () => {
    modal__setInvisible();
  };

  useEffect(() => {
    if (error) {
      modal__setVisible(error);
    }
  }, [error]);

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      {visible && (
        <Modal
          text={error}
          title="Error Handling"
          handleCloseModal={handleCloseModal}
        />
      )}
      <div className={styles.container}>
        {items && items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
