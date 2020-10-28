import { createReducer, on, Action } from "@ngrx/store";
import { loadDeliverySuccessAction } from './delivery.action';

export interface DeliveryState {
}
export const initialState: DeliveryState = {
};
const reducer = createReducer(
  initialState,
  on(loadDeliverySuccessAction, (state, action) => {
    return Object.assign({}, state, {  });
  }),
);
export function DeliveryReducer(state: DeliveryState, action: Action) {
  return reducer(state, action);
}