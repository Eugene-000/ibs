import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Header } from "../../components/Header/Header";
import { ListItems } from "../../components/ListItems/ListItems";
import { debounceSearch } from "../../search";
import { ItemsApi } from "../../API/ItemsApi";
import { useFetching } from "../../hooks/useFetching";


export function Catalog() {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    const [getItems, isLoading, error] = useFetching(async () => {
        const items = await ItemsApi.getItems();
        setItems(items)
    })

    useEffect(() => {
        getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedHandleSearch = useCallback(debounceSearch(setSearchQuery, 2000))

    const searchedItems = useMemo(() => {
        if(searchQuery && items) {
            return items.filter(item => item.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))
        } else {
            return items;
        }
    }, [searchQuery, items])
    
  return (
    <>
        <Header handleSearch={debouncedHandleSearch}/>
        <ListItems items={searchedItems} isLoading={isLoading} error={error}/>
    </>
  )
}
