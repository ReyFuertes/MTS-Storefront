import { ActionReducerMap } from '@ngrx/store';
import { AnalyticReducer, AnalyticState } from '../modules/analytic/store/analytic.reducer';
import { CollectionReducer, CollectionState } from '../modules/collection/store/collection.reducer';
import { CrokeryReducer, CrokeryState } from '../modules/crokery/store/crokery.reducer';
import { DeliveryReducer, DeliveryState } from '../modules/delivery/store/delivery.reducer';
import { MenuItemReducer, MenuItemState } from '../modules/menu-item/store/menu-item.reducer';
import { OrderReducer, OrderState } from '../modules/order/store/order.reducer';

export interface AppState {
  order: OrderState,
  menuItem: MenuItemState,
  delivery: DeliveryState,
  crokery: CrokeryState,
  collection: CollectionState,
  analytic: AnalyticState
}
export const reducers: ActionReducerMap<AppState> = {
  order: OrderReducer,
  menuItem: MenuItemReducer,
  delivery: DeliveryReducer,
  crokery: CrokeryReducer,
  collection: CollectionReducer,
  analytic: AnalyticReducer
};
