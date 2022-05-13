import { Injectable } from '@angular/core';
import * as OrderSelectors from '../store/order-delivery.selectors'
import * as OrderActions from '../store/order-delivery.actions'
import { Store } from '@ngrx/store';

@Injectable()
export class OrderFacade {
  cities$ = this.store.select(OrderSelectors.allCities);

constructor(private store:Store) { }

}
