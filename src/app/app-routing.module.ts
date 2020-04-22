import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { TrailDetailsComponent } from './trail-details/trail-details.component';
import { UserTrailsComponent } from './user-trails/user-trails.component';
import { TrailsComponent } from './trails/trails.component';
import { HomeComponent } from './home/home.component';


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
