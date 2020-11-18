import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoorbellComponent } from './components/doorbell/doorbell.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doorbell/:number', component: DoorbellComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
