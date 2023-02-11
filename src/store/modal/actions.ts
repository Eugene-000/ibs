import { ModalAction, ModalActionTypes } from "./types";

export const modal__setVisible = (text: string): ModalAction => ({
    type: ModalActionTypes.SET_VISIBLE_MODAL,
    payload: text,
});
  
export const modal__setInvisible = (): ModalAction => ({
    type: ModalActionTypes.SET_INVISIBLE_MODAL
});