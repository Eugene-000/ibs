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


// type IDataState = typeof initialState;

// export const itemsReducer = (
//   state = initialState,
//   action: ItemsAction
// ): IDataState => {
//   switch (action.type) {
//     case IItemsActionTypes.ITEMS__SET_ITEMS:
//       return { ...state, posts: action.payload };
//     case IItemsActionTypes.ITEMS__SET_ITEM:
//       return { ...state, post: action.payload };
//     default:
//       return state;
//   }
// };