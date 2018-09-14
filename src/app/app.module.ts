import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

//Routes
import { ROUTES } from './app.routes';

//Services
import { SpotifyService } from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ArtistComponent } from './components/artist/artist.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    NoimagePipe,
    TarjetaComponent,
    LoadingComponent,
    ArtistComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES , { useHash : true} )
  ],
  providers: [ SpotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
