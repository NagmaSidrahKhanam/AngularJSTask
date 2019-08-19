import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITracks } from './Tracks';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable()
export class TrackService {

    private _url: string= "http://localhost:8080/api/v1/track";
    constructor(private http:HttpClient ){}
    getTracks():Observable<ITracks[]>
    {
        return this.http.get<ITracks[]>(this._url);
    }

   
    gettoptracks():Observable<Track[]>{
    return this.http.get<any>(
        "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&limit=8&api_key=b361cf9c3552a82a0d4078248d1e31d2&format=json")
    .pipe(map (data => data.tracks.track));
}

getSearch(val):Observable<any>{     
      return this.http.get<any>(
        "http://ws.audioscrobbler.com/2.0/?method=track.search&track="+val+"&api_key=b361cf9c3552a82a0d4078248d1e31d2&format=json")
       .pipe(map( data => data.results.trackmatches.track));
   }


    saveTracks(trackk,id): Observable<any> {
      
        const body = new HttpParams()
        .set('id', id)
          .set('name', trackk.name)
          .set('comment', trackk.artist);
      
        return this.http.post(this._url,
          body.toString(),
          {
            headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
          }
        );
      }
      savetracks(trackk,id): Observable<any> {
      
        const body = new HttpParams()
        .set('id', id)
          .set('name', trackk.name)
          .set('comment', trackk.artist);
      
        return this.http.post(this._url,
          body.toString(),
          {
            headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
          }
        );
      }

  
      deletefavorite(id): Observable<any> {

        return this.http.delete<any>(this._url+"/"+id);
      }

      updatetrack(songname,artistname,id): Observable<any> {
      
        const body = new HttpParams()
        .set('id', id)
          .set('name', songname)
          .set('comment',artistname);
      console.log("id :::::::::::"+id)
        return this.http.put(this._url+"/"+id,
          body.toString(),
          {
            headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
          }
        );
      }
}