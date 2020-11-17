import { Component, OnInit } from '@angular/core';
import netlifyIdentity from 'netlify-identity-widget';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentUserName: string;
  currentUserPhoneNumber: number;
  qrCodeUrl: string;

  constructor() {}

  ngOnInit(): void {
    this.currentUserName =
      netlifyIdentity.currentUser().user_metadata.full_name || '';
    this.currentUserPhoneNumber =
      netlifyIdentity.currentUser().user_metadata.full_name.phone_number || 0;
    this.qrCodeUrl =
      `${encodeURIComponent(location.href)}?number=${
        this.currentUserPhoneNumber
      }` || '';
  }
}
