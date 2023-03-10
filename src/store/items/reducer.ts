import { ItemAction, ItemActionTypes, ItemState } from "./types"

const initialState: ItemState = {
  items: null,
  item: null,
  isLoading: false,
  error: null
}

export const itemsReducer = (state = initialState, action: ItemAction): ItemState => {
  switch (action.type) {
      case ItemActionTypes.FETCH_ITEMS:
        return {isLoading: true, error: null, items: null, item: null}
      case ItemActionTypes.FETCH_ITEMS_SUCCESS:
        return {isLoading: false, error: null, items: action.payload, item: null}
      case ItemActionTypes.FETCH_ITEM_SUCCESS:
        return {isLoading: false, error: null, items: null, item: action.payload}
      case ItemActionTypes.FETCH_ITEMS_ERROR:
        return {isLoading: false, error: action.payload, items: null, item: null}
      default:
        return state
  }
}
