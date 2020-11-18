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

  ngOnInit(): void {
    netlifyIdentity.init({
      locale: 'en', // defaults to 'en'
    });
    this.currentUser = netlifyIdentity.currentUser();

    netlifyIdentity.on('login', (user) => {
      location.reload();
    });

    netlifyIdentity.on('logout', (user) => {
      location.reload();
    });
  }
}
