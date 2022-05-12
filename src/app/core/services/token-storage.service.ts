import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  private accessTokenKey: string;

  constructor( private localStorageService: LocalStorageService ) {
    this.accessTokenKey = environment.auth.accessTokenKey || '_token';
  }

  getAccessToken(): string {
    return this.localStorageService.getItem(this.accessTokenKey) as string;
  }

  saveToken(token: string) {
    this.localStorageService.setItem(this.accessTokenKey, token);
  }
  removeToken():void {
    this.localStorageService.removeItem(this.accessTokenKey);
  }
}
