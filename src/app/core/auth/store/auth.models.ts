export enum TokenStatus {
    PENDING = 'PENDING',
    VALIDATING = 'VALIDATING',
    VALID = 'VALID',
    INVALID = 'INVALID',
  }

  export interface AuthState {
    isLoggedIn: boolean;
    accessTokenStatus: TokenStatus;
    isLoadingLogin: boolean;
    hasLoginError: boolean;
  }

  export interface AuthUser {
    id: number;
    email?: string;
    firstName: string;
    lastName: string;
  }
