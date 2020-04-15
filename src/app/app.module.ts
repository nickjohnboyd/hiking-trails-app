import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrailSearchComponent } from './trail-search/trail-search.component';
import { TrailListComponent } from './trail-list/trail-list.component';
import { TrailItemComponent } from './trail-item/trail-item.component';
import { TrailDetailsComponent } from './trail-details/trail-details.component';
import { UserTrailsComponent } from './user-trails/user-trails.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailSearchComponent,
    TrailListComponent,
    TrailItemComponent,
    TrailDetailsComponent,
    UserTrailsComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
