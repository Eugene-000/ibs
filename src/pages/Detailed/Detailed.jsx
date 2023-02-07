import React from "react";
import { useParams } from "react-router-dom";
import { ItemsApi } from '../../API/Items';
import { Header } from "../../components/Header/Header";
import { useFetching } from "../../hooks/useFetching";
import { ItemInfo } from "./components/ItemInfo/ItemInfo";

export function Detailed() {
  const { id } = useParams();

  const [item, isLoading, error] = useFetching(() => {
    return ItemsApi.getItem(id);
  }, [id]);

  return (
    <>
      <Header />
      <ItemInfo item={item} isLoading={isLoading} error={error}/>
    </>
  );
}
