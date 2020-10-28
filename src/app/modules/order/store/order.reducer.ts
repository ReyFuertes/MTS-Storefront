import { createReducer, on, Action } from "@ngrx/store";
import { loadOrderSuccessAction } from './order.action';

export interface OrderState {
}
export const initialState: OrderState = {
};
const reducer = createReducer(
  initialState,
  on(loadOrderSuccessAction, (state, action) => {
    return Object.assign({}, state, {  });
  }),
);
export function OrderReducer(state: OrderState, action: Action) {
  return reducer(state, action);
}