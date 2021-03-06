import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  
  nuevasCanciones:any[] = [];
  noImage:string = "/assets/img/default-image.png";
  loading:boolean = true;

  constructor( private spotify:SpotifyService ,
               ){
   this.spotify.getNewReleases()
           .subscribe( (data:any) => {
             this.nuevasCanciones = data
             this.loading = false;         
            });   
   }


}
