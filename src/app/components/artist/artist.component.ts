import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  artist:any[] =[];
  topTracks:any[] = [];
  loading:boolean = true;
  constructor( private activatedRoute:ActivatedRoute,
               private spotify:SpotifyService) {
    this.activatedRoute.params.subscribe( params => {
      this.getTopTracks(params['id']);
      this.spotify.getArtist(params['id'])
        .subscribe( (artista:any) => {
          this.artist = artista;
          this.loading = false;

        })
    })
   }

   getTopTracks( id:string ){
     this.spotify.getTopTracks(id)
      .subscribe( (topTracks:any) => {
        this.topTracks = topTracks;
      })
   }


}
