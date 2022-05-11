import { AuthUser } from './../auth.models';
import { createAction, props } from '@ngrx/store';


// Refresh token - #1 [no payload is needed]
export const refreshTokenRequest = createAction('[Auth] Refresh Token Request');
export const refreshTokenSuccess = createAction('[Auth] Refresh Token Success');
export const refreshTokenFailure = createAction('[Auth] Refresh Token Failure');



// Login
export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction('[Auth] Login Success');
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: Error }>()
);

// Logout
export const logout = createAction('[Auth] Logout');





// Reset Password
export const resetPassword = createAction('[Auth] Reset Password');
export const resetPasswordSuccess = createAction('[Auth] Reset Password Success');
export const resetPasswordFailure = createAction('[Auth] Reset Password Failure');

//set New Password (admin only)
export const setNewPassword = createAction(
  '[Auth] Set New Password',
  props<{ password: string; token: string }>()
);
export const setNewPasswordSuccess = createAction(
  '[Auth] Set New Password Success'
);
export const setNewPasswordFailure = createAction(
  '[Auth] Set New Password Failure',
  props<{ error: Error }>()
);
// request reset password
export const requestResetPassword = createAction(
  '[Auth] Request Reset Password',
  props<{ email: string }>()
);
export const requestResetPasswordSuccess = createAction(
  '[Auth] Request Reset Password Success'
);
export const requestResetPasswordFailure = createAction(
  '[Auth] Request Reset Password Failure',
  props<{ error: Error }>()
)
