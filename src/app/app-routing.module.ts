import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoorbellComponent } from './components/doorbell/doorbell.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'doorbell', component: DoorbellComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
