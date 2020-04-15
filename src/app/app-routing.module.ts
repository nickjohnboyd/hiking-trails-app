import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { TrailSearchComponent } from './trail-search/trail-search.component';
import { TrailDetailsComponent } from './trail-details/trail-details.component';


const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'search', component: TrailSearchComponent },
  { path: 'trail-detail/:id', component: TrailDetailsComponent },
  { path: '**', component: TrailSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
