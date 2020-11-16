import { Component, OnInit } from '@angular/core';
import netlifyIdentity from 'netlify-identity-widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'qr-doorbell';

  ngOnInit(): void {
    netlifyIdentity.init({
      locale: 'en', // defaults to 'en'
    });
  }
}
