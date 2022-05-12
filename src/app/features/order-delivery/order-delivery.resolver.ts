import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { select, Store} from '@ngrx/store';
import { Observable } from "rxjs";
import {filter, finalize, first, tap} from 'rxjs/operators';
import { AppState } from "src/app/reducers";
import {loadLocations , areLocationsLoaded } from './store'


@Injectable()
export class CitiesResolver implements Resolve<any> {
  loading = false;
  constructor(private store: Store<AppState>) {

  }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {

return this.store
    .pipe(
        select(areLocationsLoaded),
        tap(citiesLoaded => {
            if (!this.loading && !citiesLoaded) {
                this.loading = true;
                this.store.dispatch(loadLocations());
            }
        }),
        filter(coursesLoaded => coursesLoaded),
        first(),
        finalize(() => this.loading = false)
    );

}
}
