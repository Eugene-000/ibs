import { IItems } from "../../models/items";
import { ItemAction, ItemActionTypes } from "./types";


export const items__setItems = (items: Array<IItems>): ItemAction => ({
  type: ItemActionTypes.FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const items__setItem = (item: IItems): ItemAction => ({
  type: ItemActionTypes.FETCH_ITEM_SUCCESS,
  payload: item,
});

