import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  finalize,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { TokenStorageService } from 'src/app/core/services';
import { AuthService } from '../../auth.service';
import * as AuthActions from '../actions/auth.actions';
@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      switchMap((credentials) =>
        this.authService.login(credentials.email, credentials.password).pipe(
          map((data) => {
            const { token } = data;
            if (token) {
              // save token
              this.tokenStorageService.saveToken(token);
              // trigger login success action
              return AuthActions.loginSuccess();
            } else {
              return AuthActions.wrongCredentials();
            }
          }),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  onLoginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          if (true) {
            this.router.navigateByUrl('/');
          }
        })
      );
    },
    { dispatch: false }
  );

  onWrongCredentials$ = createEffect(
    () => {
      //todo  - toast it
      return this.actions$.pipe(
        ofType(AuthActions.wrongCredentials),
        tap(() => {
          globalThis.prompt('wrong credentials');
        })
      );
    },
    { dispatch: false }
  );

  onLoginFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        tap((error) => {
          this.tokenStorageService.removeToken();
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private tokenStorageService: TokenStorageService
  ) {}
}
