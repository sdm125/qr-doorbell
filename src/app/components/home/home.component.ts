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
    if (netlifyIdentity.currentUser()) {
      this.qrCodeUrl = `${encodeURIComponent(location.href)}doorbell/${
        netlifyIdentity.currentUser().user_metadata.phone_number
      }`;
      this.currentUserName = netlifyIdentity.currentUser().user_metadata.full_name;
    } else {
      this.currentUserPhoneNumber = '';
      this.currentUserName = '';
      this.qrCodeUrl = '';
    }
  }
}
