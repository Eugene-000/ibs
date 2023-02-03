import styles from "./ListItems.module.scss";
import { Item } from "./components/item/Item";
import { Loader } from "../../../../components/loader/Loader";
import { Modal } from "../../../../components/modal/Modal";
import { useEffect, useState } from "react";

export const ListItems = ({ items, isLoading, error }) => {
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
      <div className={styles.container}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
