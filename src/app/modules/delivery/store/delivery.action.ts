import { createAction, props } from '@ngrx/store';

export enum DeliveryActionTypes {
  loadDeliveryAction = '[App] load delivery',
  loadDeliverySuccessAction = '[App] load delivery (success)',
}
export const loadDeliveryAction = createAction(
  DeliveryActionTypes.loadDeliveryAction
);
export const loadDeliverySuccessAction = createAction(
  DeliveryActionTypes.loadDeliverySuccessAction,
  props<{ response: any }>()
);
