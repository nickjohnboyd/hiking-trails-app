import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Base Module Imports
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Component Imports
import { AppComponent } from './app.component';
import { TrailSearchComponent } from './components/trails/search/trail-search/trail-search.component';
import { TrailListComponent } from './components/trails/trail-list/trail-list.component';
import { TrailItemComponent } from './components/trails/trail-item/trail-item.component';
import { TrailDetailsComponent } from './components/trails/trail-details/trail-details.component';
import { TrailInformationComponent } from './components/trails/trail-details/trail-information/trail-information.component';
import { UserTrailsComponent } from './components/user/user-trails/user-trails.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { TrailDifficultyComponent } from './components/trails/trail-difficulty/trail-difficulty.component';
import { TrailRatingComponent } from './components/trails/trail-rating/trail-rating.component';
import { TrailsComponent } from './components/trails/trails/trails.component';
import { SearchBarComponent } from './components/trails/search/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home/home.component';
import { HomeExtrasComponent } from './components/home/home-extras/home-extras.component';
import { TrailItemSmallComponent } from './components/trails/trail-item-small/trail-item-small.component';
import { SpinnerComponent } from './components/global/spinner/spinner.component';
import { CommentsComponent } from './components/trails/trail-details/comments/comments.component';

// Material Imports
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

// Firebase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { CurrentWeatherComponent } from './components/trails/trail-details/current-weather/current-weather.component';
import { UserInputsComponent } from './components/trails/trail-details/user-inputs/user-inputs.component';
import { DailyWeatherComponent } from './components/trails/trail-details/daily-weather/daily-weather.component';

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
    SpinnerComponent,
    CommentsComponent,
    TrailInformationComponent,
    CurrentWeatherComponent,
    UserInputsComponent,
    DailyWeatherComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
