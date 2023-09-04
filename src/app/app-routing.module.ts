import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { LoginComponent } from './Components/authentication/login/login.component';
import { SignupComponent } from './Components/authentication/signup/signup.component';
import { MainComponent } from './Components/main/main.component';
import { HomeComponent } from './Components/main/home/home.component';
import { ProfileComponent } from './Components/main/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }, // Standardroute
    ],
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
