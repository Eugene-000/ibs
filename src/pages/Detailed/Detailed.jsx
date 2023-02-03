import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemsApi } from "../../api/Items";
import { Header } from "../../components/header/Header";
import { useFetching } from "../../hooks/useFetching";
import { ItemInfo } from "./components/itemInfo/ItemInfo";

export function Detailed() {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [getItem, isLoading, error] = useFetching(async () => {
    const item = await ItemsApi.getItem(id);
    setItem(item);
  });

  useEffect(() => {
    getItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <ItemInfo item={item} isLoading={isLoading} error={error}/>
    </>
  );
}
