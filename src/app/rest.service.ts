import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {
  private schedulePickupUrl = 'api/schedule-pickup';

  constructor(private http: HttpClient) { }

  schedulePickup(body): Observable<any> {
    return this.http.post(this.schedulePickupUrl, null, {});
  }

}
