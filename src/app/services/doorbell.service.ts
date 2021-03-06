import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoorbellService {
  constructor(private http: HttpClient) {}

  ringDoorbell(phoneNumber: string): Observable<any> {
    return this.http.post(
      '/.netlify/functions/ring-doorbell',
      JSON.stringify({
        number: phoneNumber,
      })
    );
  }
}
