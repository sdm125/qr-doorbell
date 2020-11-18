import { Component, OnInit } from '@angular/core';
import netlifyIdentity from 'netlify-identity-widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'qr-doorbell';
  currentUser: Object;
  doorBellUrl: string;

  ngOnInit(): void {
    netlifyIdentity.init({
      locale: 'en', // defaults to 'en'
    });
    if (netlifyIdentity.currentUser()) {
      this.currentUser = netlifyIdentity.currentUser();

      this.doorBellUrl = `/doorbell/${encodeURIComponent(
        netlifyIdentity.currentUser().user_metadata.phone_number
      )}`;
    }

    netlifyIdentity.on('login', (user) => {
      location.reload();
    });

    netlifyIdentity.on('logout', (user) => {
      location.reload();
    });
  }
}
