import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/main/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { SignupComponent } from './Components/authentication/signup/signup.component';
import { LoginComponent } from './Components/authentication/login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/main/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { FriendBoxComponent } from './Components/main/home/friend-box/friend-box.component';
import { PostComponent } from './Components/main/home/post/post.component';
import { ProfileComponent } from './Components/main/profile/profile.component';
import { PostItemComponent } from './Components/main/home/post/post-item/post-item.component';
import { SuggestionsFriendshipComponent } from './Components/main/home/suggestions-friendship/suggestions-friendship.component';
import { ProfileItemComponent } from './Components/main/home/profile-item/profile-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    SignupComponent,
    LoginComponent,
    NotFoundPageComponent,
    HomeComponent,
    MainComponent,
    FriendBoxComponent,
    PostComponent,
    ProfileComponent,
    PostItemComponent,
    SuggestionsFriendshipComponent,
    ProfileItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
