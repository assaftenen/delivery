import { Action, createReducer, on } from '@ngrx/store';
import * as OrderDeliveryActions from './order-delivery.actions';
import { City } from './../order-delivery.models';

export const orderDeliveryFeatureKey = 'orderDelivery';

export interface OrderState {
  areLocationsLoaded: boolean;
  locations: City[];
}

export const initialState: OrderState = {
  areLocationsLoaded: false,
  locations: [],
};

export const reducer = createReducer(
  initialState,
  on(OrderDeliveryActions.loadLocations, (state) => state),
  on(OrderDeliveryActions.loadLocationsSuccess, (state, action) => {
    state = {
      ...state,
      ...{ areLocationsLoaded: true, locations: action.data },
    };
    return state;
  }),
  on(OrderDeliveryActions.loadLocationsFailure, (state, action) => {
    state = { ...state, ...{ areLocationsLoaded: false } };
    return state;
  })
);
