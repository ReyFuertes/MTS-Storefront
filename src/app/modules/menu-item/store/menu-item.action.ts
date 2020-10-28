import { createAction, props } from '@ngrx/store';

export enum MenuItemActionTypes {
  loadMenuItemAction = '[App] load menu item',
  loadMenuItemSuccessAction = '[App] load menu item (success)',
}
export const loadMenuItemAction = createAction(
  MenuItemActionTypes.loadMenuItemAction
);
export const loadMenuItemSuccessAction = createAction(
  MenuItemActionTypes.loadMenuItemSuccessAction,
  props<{ response: any }>()
);
