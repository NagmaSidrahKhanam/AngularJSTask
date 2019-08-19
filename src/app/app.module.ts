import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTrackComponent } from './add-tracks/add-track.component';
import { LogoComponent } from './logo/logo.component';
import { ListOfTracksComponent } from './list-of-tracks/list-of-tracks.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { SearchComponent } from './search/search.component';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
// import { Carousel } from 'react-responsive-carousel';
import {HttpClientModule } from '@angular/common/http';
import {TrackService} from './track.service';
// import { SearchTrackListComponent } from './search-track-list/search-track-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToptracksComponent } from './toptracks/toptracks.component';
import {routingComponents} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddTrackComponent,
    LogoComponent,
    ListOfTracksComponent,
    FooterComponent,
    HeaderComponent,
    // SearchComponent,
    // SearchTrackListComponent,
    WelcomeComponent,
    // ToptracksComponent,
    routingComponents,
    AddTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgMatSearchBarModule,
    MatCardModule,
    FlexLayoutModule,
    NgbModule,
    // Carousel,
    HttpClientModule    
  ],
  providers: [
    TrackService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
