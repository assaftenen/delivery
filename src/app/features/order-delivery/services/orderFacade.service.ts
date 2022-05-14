import { Injectable } from '@angular/core';
import * as OrderSelectors from '../store/order-delivery.selectors';
import * as OrderActions from '../store/order-delivery.actions';
import { Store } from '@ngrx/store';
import { City } from '../order-delivery.models';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { OrderForm } from '../order-form/order-form.component';

@Injectable()
export class OrderFacade {
  dropOffCity: City | null = null;
  pickUpCity: City | null = null;
  priceDataSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  price$ = this.priceDataSource.asObservable();
  cities$ = this.store.select(OrderSelectors.allCities);

  constructor(private store: Store) {}

  updateLocationPrice(value: { city: City; isPickup: boolean }) {
    const { city, isPickup } = value;
    if (isPickup) {
      this.pickUpCity = city;
    } else {
      this.dropOffCity = city;
    }
    this.updatePrice();
  }
  updatePrice() {
    const isExtraTax: boolean =
      this.pickUpCity?.enName !== this.dropOffCity?.enName;
    if (this.dropOffCity && this.pickUpCity) {
      this.priceDataSource.next(
        this.dropOffCity.price + this.pickUpCity.price + (isExtraTax ? 10 : 0)
      );
    }
  }

  submitOrderForm(payload: OrderForm) {
    this.store.dispatch(OrderActions.submitOrderForm({payload}));
  }
}
