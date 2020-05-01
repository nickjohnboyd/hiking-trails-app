import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { HomeComponent } from './components/home/home/home.component';
import { TrailDetailsComponent } from './components/trails/trail-details/trail-details.component';
import { TrailsComponent } from './components/trails/trails/trails.component';
import { UserTrailsComponent } from './components/user/user-trails/user-trails.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'trail-detail/:id', component: TrailDetailsComponent },
  { path: 'trails/:zip', component: TrailsComponent },
  { path: 'profile', component: UserTrailsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
