import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, Provider } from '@angular/core';
import { Store } from '@ngrx/store';
import { lastValueFrom, Observable, throwError } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import {  TokenStorageService } from '../core/services';
import * as AuthActions from './store/actions'
import { AuthState, AuthUser, TokenStatus } from './store/auth.models';
import * as AuthSelectors from './store/selectors';
import * as URLs from './models'
import { environment } from 'src/environments/environment';

export interface AccessData {
  accessToken: string;
  tokenType?: 'Bearer';

}

@Injectable()
export class AuthService {
  private hostUrl: string;
  // private clientId: string;
  // private clientSecret: string;

  constructor(
    private store: Store,
    private http: HttpClient,
    // private configService: ConfigService,
    private tokenStorageService: TokenStorageService
  ) {
    this.hostUrl = environment.baseUrl;
  }

  /**
   * Performs a request with user credentials
   * in order to get auth tokens
   *
   * @param {string} email
   * @param {string} password
   * @returns Observable<AccessData>
   */
  login(email: string, password: string): Observable<AccessData> {
    console.log({ email, password });
    return this.http.post<AccessData>(`${this.hostUrl}/${URLs.LOGIN}`, {
      email,
      password,
    });
  }



  getAuthUser(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.hostUrl}/api/users/me`);
  }
}

