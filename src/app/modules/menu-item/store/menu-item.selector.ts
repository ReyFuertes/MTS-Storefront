import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

export const selectedState = (state: AppState) => state.menuItem;
export const getMenuItemSelector = createSelector(
  selectedState,
  state => state
);
