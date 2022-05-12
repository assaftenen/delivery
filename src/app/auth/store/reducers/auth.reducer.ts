import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from '../actions/auth.actions';
import { AuthState, TokenStatus } from '../auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  user: undefined,
  accessTokenStatus: TokenStatus.PENDING,
  isLoadingLogin: false,
  hasLoginError: false,
};

export const reducer = createReducer(
  initialState,
  on(
    AuthActions.loginRequest,
    (state): AuthState => ({
      ...state,
      accessTokenStatus: TokenStatus.VALIDATING,
      isLoadingLogin: true,
      hasLoginError: false,
    })
  ),

  on(
    AuthActions.loginSuccess,
    (state): AuthState => ({
      ...state,
      isLoggedIn: true,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.VALID,
    })
  ),
  on(
    AuthActions.loginFailure,

    (state, action): AuthState => ({
      ...state,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.INVALID,
      hasLoginError: action.type === '[Auth] Login Failure' && !!action.error,
    })
  )
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return reducer(state, action);
}
