import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';
  import { HttpInterceptor } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { EMPTY, Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  import { TokenStorageService } from '../../services';
  import { AuthFacade } from '../store/auth.facade';
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(
      private authFacade: AuthFacade,
      private tokenStorageService: TokenStorageService
    ) {}

    intercept(
      req: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      const accessToken = this.tokenStorageService.getAccessToken();

      if (accessToken) {
        req = req.clone({
          setHeaders: { Authorization: `bearer ${accessToken}` },
        });
      }

      return next.handle(req).pipe(s => this.handleErrors(s, req.url));
    }

    private handleErrors(
      source: Observable<HttpEvent<unknown>>,
      urlPath: string
    ): Observable<HttpEvent<unknown>> {
      return source.pipe(
        catchError((error: HttpErrorResponse) => {

          return throwError(() => EMPTY);
        })
      );
    }
  }
