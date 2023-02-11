export interface modalState {
    visible: boolean;
    text: string | null;
}

export enum ModalActionTypes {
    SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL',
    SET_INVISIBLE_MODAL = 'SET_INVISIBLE_MODAL',
}

interface SetVisibleModalAction {
    type: ModalActionTypes.SET_VISIBLE_MODAL;
    payload: string
}

interface SetInvisibleModalAction {
    type: ModalActionTypes.SET_INVISIBLE_MODAL;
}

export type ModalAction = SetVisibleModalAction | SetInvisibleModalAction