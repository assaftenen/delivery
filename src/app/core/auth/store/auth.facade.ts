import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from './actions/auth.actions';
import * as AuthSelectors from './selectors/auth.selectors';


@Injectable()
export class AuthFacade {
  auth$ = this.store.select(AuthSelectors.selectAuth);
  isLoggedIn$ = this.store.select(AuthSelectors.selectIsLoggedIn);
  isLoadingLogin$ = this.store.select(AuthSelectors.selectIsLoadingLogin);
  hasLoginError$ = this.store.select(AuthSelectors.selectLoginError);

  constructor(private store: Store) {}

  login(email: string, password: string) {
    this.store.dispatch(AuthActions.loginRequest({ email, password }));
  }


}
