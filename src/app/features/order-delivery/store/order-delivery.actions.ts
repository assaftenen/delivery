import { createAction, props } from '@ngrx/store';
import { City } from '../order-delivery.models';

export const loadLocations = createAction(
  '[OrderDelivery] Load Locations'
);

export const loadLocationsSuccess = createAction(
  '[OrderDelivery] Load Locations Success',
  props<{ data: City[] }>()
);

export const loadLocationsFailure = createAction(
  '[OrderDelivery] Load Locations Failure',
  props<{ error: any }>()
);
