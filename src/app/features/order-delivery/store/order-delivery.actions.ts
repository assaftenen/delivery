import { createAction, props } from '@ngrx/store';
import { City } from '../order-delivery.models';
import { OrderForm } from '../order-form/order-form.component';

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

//Order form actions

export const submitOrderForm = createAction(
  '[OrderDelivery] Submit Order Form',
  props<{ payload: OrderForm }>()
);

export const submitOrderFormSuccess = createAction(
  '[OrderDelivery] Submit Order Form Success',
);

export const submitOrderFormFailure = createAction(
  '[OrderDelivery] Submit Order Form Failure',
  props<{ error: any }>()
);
