import { Injectable } from '@angular/core';
import netlifyIdentity from 'netlify-identity-widget';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  async updateUserPhoneNumber(phoneNumber: number): Promise<any> {
    const data = await this.getEncryptedPhoneNumber(phoneNumber).toPromise();

    return netlifyIdentity.gotrue.currentUser().update({
      data: {
        ...netlifyIdentity.currentUser().user_metadata,
        phone_number: data.encrypted_number,
      },
    });
  }

  getEncryptedPhoneNumber(phoneNumber: number): Observable<any> {
    return this.http.post(
      '/.netlify/functions/get-encrpted-phone-number',
      JSON.stringify({ number: phoneNumber })
    );
  }
}
