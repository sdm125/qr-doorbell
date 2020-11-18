import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AddPhoneNumberComponent } from './components/add-phone-number/add-phone-number.component';
import { DoorbellComponent } from './components/doorbell/doorbell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPhoneNumberComponent,
    DoorbellComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
