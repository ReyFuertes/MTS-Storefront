import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

export const selectedState = (state: AppState) => state.crokery;
export const getCrokerySelector = createSelector(
  selectedState,
  state => state
);
