import { AuthUser } from '../auth.models';
import { createAction, props } from '@ngrx/store';


// Login
export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction('[Auth] Login Success');
export const wrongCredentials = createAction('[Auth] Wrong credentials');
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: Error | null }>()
);

