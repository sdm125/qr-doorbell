import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import netlifyIdentity from 'netlify-identity-widget';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  updateUserPhoneNumber(phoneNumber: number): Promise<any> {
    return netlifyIdentity.gotrue.currentUser().update({
      data: {
        ...netlifyIdentity.currentUser().user_metadata,
        phone_number: phoneNumber,
      },
    });
  }
}
