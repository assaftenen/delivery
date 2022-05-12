import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from '../order-delivery.models';
import * as URLS from '../order-delivery.const';

@Injectable()
export class OrderDeliveryHttpService {
  constructor(private http: HttpClient) {}

  getCities(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${URLS.CITIES}`);
  }
}
