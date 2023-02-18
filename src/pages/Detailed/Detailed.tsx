import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ItemInfo } from "./components/ItemInfo/ItemInfo";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

export const Detailed: React.FC = () => {
  const { id } = useParams();

  const {item, error, isLoading} = useTypedSelector(state => state.items);
  const {getItem} = useActions();

  useEffect(() => {
    if(id) {
      getItem(id);
    }
  }, [id])

  return (
    <>
      <Header handleSearch={() => null}/>
      <ItemInfo item={item} isLoading={isLoading} error={error}/>
    </>
  );
}
