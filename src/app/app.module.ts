import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FriendboxComponent } from './friendbox/friendbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DogCardComponent,
    ProposalsComponent,
    ProfileRowComponent,
    FriendboxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
