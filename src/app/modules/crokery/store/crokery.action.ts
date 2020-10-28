import { createAction, props } from '@ngrx/store';

export enum CrokeryActionTypes {
  loadCrokeryAction = '[App] load crokery',
  loadCrokerySuccessAction = '[App] load crokery (success)',
}
export const loadCrokeryAction = createAction(
  CrokeryActionTypes.loadCrokeryAction
);
export const loadCrokerySuccessAction = createAction(
  CrokeryActionTypes.loadCrokerySuccessAction,
  props<{ response: any }>()
);
