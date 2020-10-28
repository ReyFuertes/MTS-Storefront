import { createAction, props } from '@ngrx/store';

export enum AnalyticActionTypes {
  loadAnalyticAction = '[App] load analytic',
  loadAnalyticSuccessAction = '[App] load analytic (success)',
}
export const loadAnalyticAction = createAction(
  AnalyticActionTypes.loadAnalyticAction
);
export const loadAnalyticSuccessAction = createAction(
  AnalyticActionTypes.loadAnalyticSuccessAction,
  props<{ response: any }>()
);
