import { createReducer, on, Action } from "@ngrx/store";
import { loadAnalyticSuccessAction } from './analytic.action';

export interface AnalyticState {
}
export const initialState: AnalyticState = {
};
const reducer = createReducer(
  initialState,
  on(loadAnalyticSuccessAction, (state, action) => {
    return Object.assign({}, state, {  });
  }),
);
export function AnalyticReducer(state: AnalyticState, action: Action) {
  return reducer(state, action);
}