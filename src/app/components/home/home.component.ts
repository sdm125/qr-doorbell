import { Component, OnInit } from '@angular/core';
import netlifyIdentity from 'netlify-identity-widget';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    netlifyIdentity.init({
      locale: 'en', // defaults to 'en'
    });
  }
}
