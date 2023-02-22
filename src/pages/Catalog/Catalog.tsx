import React, { useCallback, useMemo, useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { ListItems } from "./components/ListItems/ListItems";
import { debounce } from "../../lib/debounce";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Catalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const {items, error, isLoading} = useTypedSelector(state => state.items);
  const {getItems} = useActions();

  useEffect(() => {
    getItems();
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
