import React from "react";
import { useParams } from "react-router-dom";
import { ItemsApi } from "../../api/Items";
import { Header } from "../../components/header/Header";
import { useFetching } from "../../hooks/useFetching";
import { ItemInfo } from "./components/itemInfo/ItemInfo";

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
