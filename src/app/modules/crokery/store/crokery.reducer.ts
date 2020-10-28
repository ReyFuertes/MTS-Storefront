import { createReducer, on, Action } from "@ngrx/store";
import { loadCrokerySuccessAction } from './crokery.action';

export interface CrokeryState {
}
export const initialState: CrokeryState = {
};
const reducer = createReducer(
  initialState,
  on(loadCrokerySuccessAction, (state, action) => {
    return Object.assign({}, state, {  });
  }),
);
export function CrokeryReducer(state: CrokeryState, action: Action) {
  return reducer(state, action);
}