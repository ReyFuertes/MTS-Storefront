import { createAction, props } from '@ngrx/store';

export enum CollectionActionTypes {
  loadCollectionAction = '[App] load collection',
  loadCollectionSuccessAction = '[App] load collection (success)',
}
export const loadCollectionAction = createAction(
  CollectionActionTypes.loadCollectionAction
);
export const loadCollectionSuccessAction = createAction(
  CollectionActionTypes.loadCollectionSuccessAction,
  props<{ response: any }>()
);
