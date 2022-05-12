import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOrderDelivery from './order-delivery.reducer';

export const selectOrderDeliveryState = createFeatureSelector<fromOrderDelivery.OrderState>(
  fromOrderDelivery.orderDeliveryFeatureKey
);

export const allCities = createSelector(selectOrderDeliveryState, orderState => orderState.locations )
export const areLocationsLoaded = createSelector(selectOrderDeliveryState, orderState => orderState.areLocationsLoaded )
