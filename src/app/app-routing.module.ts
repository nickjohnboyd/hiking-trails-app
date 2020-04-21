import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { TrailSearchComponent } from './trail-search/trail-search.component';
import { TrailDetailsComponent } from './trail-details/trail-details.component';
import { TrailListComponent } from './trail-list/trail-list.component';
import { UserTrailsComponent } from './user-trails/user-trails.component';
import { TrailsComponent } from './trails/trails.component';


const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'trail-detail/:id', component: TrailDetailsComponent },
  // { path: 'trails/:zip', component: TrailListComponent },
  // { path: 'search', component: TrailSearchComponent },
  // { path: 'profile', component: UserTrailsComponent },
  { path: 'trails/:zip', component: TrailsComponent },
  { path: 'search', component: TrailsComponent },
  { path: 'profile', component: UserTrailsComponent },
  { path: '**', component: TrailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
