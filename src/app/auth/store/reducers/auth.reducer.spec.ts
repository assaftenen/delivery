import * as AuthActions from "../actions/auth.actions";
import { AuthState, TokenStatus } from "./../auth.models";
import { reducer, initialState } from "./auth.reducer";

describe("Auth Reducer", () => {
  describe("Reducer - loginRequest", () => {
    it("should have a isLoadingLogin set to true for login action", () => {
      const action = AuthActions.loginRequest;
      expect(reducer(initialState, action).isLoadingLogin).toEqual(true);
    });
    it("should have a hasLoginError set to false for login action", () => {
      const action = AuthActions.loginRequest;
      expect(reducer(initialState, action).hasLoginError).toEqual(false);
    });
    it("should have accessTokenStatus set to 'validating", () => {
      const action = AuthActions.loginRequest;
      expect(reducer(initialState, action).accessTokenStatus.toLowerCase()).toEqual('validating');
    });
  });
  describe("Reducer - login success action", () => {
    it("should have a isLoadingLogin set to true for login action", () => {
      const action = AuthActions.loginSuccess;
      expect(reducer(initialState, action).isLoadingLogin).toEqual(false);
    });
    it("should have a hasLoginError set to false for login action", () => {
      const action = AuthActions.loginSuccess;
      expect(reducer(initialState, action).hasLoginError).toEqual(false);
    });
  });
  describe("Reducer - logout action", () => {
    it("should have a isLoadingLogin set to true for login action", () => {
      const action = AuthActions.logout;
      expect(reducer(initialState, action).isLoadingLogin).toEqual(false);
    });
    it("should have a hasLoginError set to false for login action", () => {
      const action = AuthActions.logout;
      expect(reducer(initialState, action).hasLoginError).toEqual(false);
    });
    it("should have isLoggedIn set to false", () => {
      const action = AuthActions.logout;
      expect(reducer(initialState, action).isLoggedIn).toEqual(false);
    });
  });
  describe("Reducer - refreshTokenRequest", () => {
    it("token status should be 'Validating'", () => {
      const action = AuthActions.refreshTokenRequest;
      expect(reducer(initialState, action).refreshTokenStatus).toEqual(TokenStatus.VALIDATING);
    });
  });
  describe("Reducer - Login success and refresh token success", () => {
    it("isLoggedIn", () => {
      const action = AuthActions.loginSuccess;
      expect(reducer(initialState, action).isLoadingLogin).toEqual(false);
    });
    it("isLoadingLogging should be false", () => {
      const action = AuthActions.loginSuccess;
      expect(reducer(initialState, action).isLoadingLogin).toEqual(false);
    });
    it("accessTokenStatus should be valid", () => {
      const action = AuthActions.refreshTokenSuccess;
      expect(reducer(initialState, action).hasLoginError).toEqual(false);
    });
    it("refreshTokenStatus should be 'valid", () => {
      const action = AuthActions.refreshTokenSuccess;
      expect(reducer(initialState, action).refreshTokenStatus.toLowerCase()).toEqual('valid');
    });
  });
});
