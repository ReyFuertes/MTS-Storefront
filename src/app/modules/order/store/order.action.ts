import { createAction, props } from '@ngrx/store';

export enum OrderActionTypes {
  loadOrderAction = '[App] load',
  loadOrderSuccessAction = '[App] load (success)',
}
export const loadOrderAction = createAction(
  OrderActionTypes.loadOrderAction
);
export const loadOrderSuccessAction = createAction(
  OrderActionTypes.loadOrderSuccessAction,
  props<{ response: any }>()
);
