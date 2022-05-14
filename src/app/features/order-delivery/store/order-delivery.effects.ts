import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  concatMap,
  tap,
  switchMap,
  exhaustMap,
} from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as OrderDeliveryActions from './order-delivery.actions';
import { OrderDeliveryHttpService } from '../services/order-delivery-http.service';
import { ToasterService } from 'src/app/core/services/toaster.service';

@Injectable()
export class OrderDeliveryEffects {
  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderDeliveryActions.loadLocations),
      concatMap((action) => this.httpService.getCities()),
      map((cities) =>
        OrderDeliveryActions.loadLocationsSuccess({ data: cities })
      ),
      catchError((error) =>
        of(OrderDeliveryActions.loadLocationsFailure({ error }))
      )
    )
  );

  onloadLocationsSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(OrderDeliveryActions.loadLocationsSuccess),
        tap((cities) => {
          console.log(cities);
        })
      );
    },
    { dispatch: false }
  );

  // add failure ^ with toaster

  onSubmitOrderForm$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrderDeliveryActions.submitOrderForm),
      switchMap((action) =>
        this.httpService.submitOrderForm(action.payload).pipe(
          map((data: any) => {
            if (!data.res) {
              return OrderDeliveryActions.submitOrderFormSuccess();
            } else {
              return OrderDeliveryActions.submitOrderFormFailure({
                error: null,
              });
            }
          }),
          catchError((error) =>
            of(OrderDeliveryActions.submitOrderFormFailure({ error }))
          )
        )
      )
    );
  });

  onSubmitOrderFormSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(OrderDeliveryActions.submitOrderFormSuccess),
        tap(() => {
          this.toasterService.openSnackBar('Submit Form Success');
          globalThis.location.reload();
        })
      );
    },
    { dispatch: false }
  );
  onSubmitOrderFormFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(OrderDeliveryActions.submitOrderFormFailure),
        tap((error) => {
          this.toasterService.openSnackBar('Failed Submit Order Form');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private httpService: OrderDeliveryHttpService,
    private toasterService: ToasterService
  ) {}
}
