import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { 
    console.log("Spotify Service Listo!!!");
  }
  getQuery( url:string , termino?:string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAZLT3x3GgOAfHSy9P97DgjK_9fteGSjsmsKXKTxI-ITzQnWXShbayPlm-x6DyeSyQcVgr4m9zh-ZJGg5g'
    });
    if  ( termino == null ){
      return this.http.get(`https://api.spotify.com/v1/${ url }`, { headers});
    } else {
    return this.http.get(`https://api.spotify.com/v1/${ url }${ termino }`, { headers});
    }
  }


  getNewReleases(){
    return this.getQuery( "browse/new-releases" )
            .pipe( map( data => data['albums'].items))
  }

  getArtists( termino:string ){
    return this.getQuery( `search?q=${termino}&type=artist&limit=20` )
      .pipe( map( data => data['artists'].items));
  }

  getArtist( id:string ){
    return this.getQuery(`artists/${id}`)
  }
  getTopTracks( id:string ){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map( data => data['tracks']))
  }
}
