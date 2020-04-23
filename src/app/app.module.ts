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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { TrailDifficultyComponent } from './trail-difficulty/trail-difficulty.component';
import { TrailRatingComponent } from './trail-rating/trail-rating.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TrailsComponent } from './trails/trails.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeComponent } from './home/home.component';
import { HomeExtrasComponent } from './home-extras/home-extras.component';
import { TrailItemSmallComponent } from './trail-item-small/trail-item-small.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    TrailSearchComponent,
    TrailListComponent,
    TrailItemComponent,
    TrailDetailsComponent,
    UserTrailsComponent,
    UserLoginComponent,
    NavbarComponent,
    TrailDifficultyComponent,
    TrailRatingComponent,
    TrailsComponent,
    SearchBarComponent,
    HomeComponent,
    HomeExtrasComponent,
    TrailItemSmallComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
