import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { MobileAppsComponent } from './mobile-apps/mobile-apps.component';
import { FooterComponent } from './footer/footer.component';
import { CampaignComponent } from './campaign/campaign.component';
import { StartComponent } from './start/start.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialComponent,
    MobileAppsComponent,
    FooterComponent,
    CampaignComponent,
    StartComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
