import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as OrderDeliveryActions from './order-delivery.actions';
import { OrderDeliveryHttpService } from '../order-delivery-http.service';




@Injectable()
export class OrderDeliveryEffects {

  loadLocations$ = createEffect(
    () => this.actions$
        .pipe(
            ofType(OrderDeliveryActions.loadLocations),
            concatMap(action =>
                this.httpService.getCities()),
            map(cities => OrderDeliveryActions.loadLocationsSuccess({data:cities})),
            catchError((error) => of(OrderDeliveryActions.loadLocationsFailure({error})))

        )
);

onloadLocationsSuccess$ = createEffect(
  () => {
    return this.actions$.pipe(
      ofType(OrderDeliveryActions.loadLocationsSuccess),
      tap((cities) => {
        console.log(cities)

      })
    );
  },
  { dispatch: false }
);




  constructor(private actions$: Actions, private httpService:OrderDeliveryHttpService) {}

}
