import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, Provider } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Observable, throwError } from 'rxjs';


import {  TokenStorageService } from '../core/services';
import * as URLs from './models'
import { environment } from 'src/environments/environment';

export interface AccessData {
token?:string;
res?:string

}

@Injectable()
export class AuthService {
  private hostUrl: string;
  constructor(
    private store: Store,
    private http: HttpClient,
  ) {
    this.hostUrl = environment.baseUrl;
  }

  /**
   * Performs a request with user credentials
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
}

