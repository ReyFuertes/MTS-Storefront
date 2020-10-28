import { createReducer, on, Action } from "@ngrx/store";
import { loadCollectionSuccessAction } from './collection.action';

export interface CollectionState {
}
export const initialState: CollectionState = {
};
const reducer = createReducer(
  initialState,
  on(loadCollectionSuccessAction, (state, action) => {
    return Object.assign({}, state, {  });
  }),
);
export function CollectionReducer(state: CollectionState, action: Action) {
  return reducer(state, action);
}