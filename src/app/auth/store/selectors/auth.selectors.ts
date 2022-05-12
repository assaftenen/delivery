import { AuthState } from './../auth.models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AUTH_FEATURE_KEY } from '../reducers/auth.reducer';

export const selectAuth = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectIsLoggedIn = createSelector(selectAuth, state => state.isLoggedIn);

export const selectLoginError = createSelector(selectAuth, state => state.hasLoginError);

export const selectIsLoadingLogin = createSelector(
  selectAuth,
  state => state.isLoadingLogin
);

;
