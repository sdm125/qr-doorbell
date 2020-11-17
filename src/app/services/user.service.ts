import { Injectable } from '@angular/core';
import netlifyIdentity from 'netlify-identity-widget';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  updateUserPhoneNumber(phoneNumber: number): Promise<any> {
    return netlifyIdentity.gotrue.currentUser().update({
      data: {
        ...netlifyIdentity.currentUser().user_metadata,
        phone_number: phoneNumber,
      },
    });
  }
}
