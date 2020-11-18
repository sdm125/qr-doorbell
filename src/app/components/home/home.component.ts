import { Component, OnInit } from '@angular/core';
import netlifyIdentity from 'netlify-identity-widget';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentUserName: string;
  currentUserPhoneNumber: string;
  qrCodeUrl: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUserName =
      netlifyIdentity.currentUser().user_metadata.full_name || '';
    this.qrCodeUrl =
      `${encodeURIComponent(location.href)}doorbell/${
        this.currentUserPhoneNumber
      }` || '';
    if (netlifyIdentity.currentUser()) {
      this.userService
        .getDecryptedPhoneNumber(
          netlifyIdentity.currentUser().user_metadata.phone_number
        )
        .subscribe((data) => {
          this.currentUserPhoneNumber = data.decrypted_phone;
        });
    } else {
      this.currentUserPhoneNumber = '';
    }
  }
}
