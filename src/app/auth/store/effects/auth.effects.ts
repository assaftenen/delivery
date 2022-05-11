import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map, tap } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/core/services';
import { AuthService } from '../../auth.service';
import  * as  AuthActions  from '../actions/auth.actions'
@Injectable()
export class AuthEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap(credentials =>
        this.authService.login(credentials.email, credentials.password).pipe(
          map(data => {
            // save tokens
            this.tokenStorageService.saveTokens(data.accessToken);
            // trigger login success action
            return AuthActions.loginSuccess();
          }),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  onLoginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(() => {
        // redirect to dashboard
        this.router.navigateByUrl(
           '/'
        );

      })
    );
  });


  onLoginOrRefreshTokenFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginFailure, AuthActions.refreshTokenFailure),
        tap(() => {
          this.tokenStorageService.removeTokens();
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
