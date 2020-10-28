import { createReducer, on, Action } from "@ngrx/store";
import { loadMenuItemSuccessAction } from './menu-item.action';

export interface MenuItemState {
}
export const initialState: MenuItemState = {
};
const reducer = createReducer(
  initialState,
  on(loadMenuItemSuccessAction, (state, action) => {
    return Object.assign({}, state, {  });
  }),
);
export function MenuItemReducer(state: MenuItemState, action: Action) {
  return reducer(state, action);
}