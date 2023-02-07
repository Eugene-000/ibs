import React, { useCallback, useMemo, useState } from "react";
import { Header } from "../../components/Header/Header";
import { ListItems } from "./components/ListItems/ListItems";
import { debounce } from "../../lib/debounce";
import { useFetching } from "../../hooks/useFetching";
import { ItemsApi } from '../../API/Items';

export function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, isLoading, error] = useFetching(() => {
    return ItemsApi.getItems();
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleSearch = useCallback(debounce(setSearchQuery, 2000), []);

  const searchedItems = useMemo(() => {
    if (searchQuery && items) {
      return items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    } else {
      return items;
    }
  }, [searchQuery, items]);

  return (
    <>
      <Header handleSearch={debouncedHandleSearch} />
      <ListItems items={searchedItems} isLoading={isLoading} error={error} />
    </>
  );
}
