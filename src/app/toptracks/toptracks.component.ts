import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-toptracks',
  templateUrl: './toptracks.component.html',
  styleUrls: ['./toptracks.component.css']
})
export class ToptracksComponent implements OnInit {

  public toptracks;
  public breakpoint=0;

  constructor(private _trackService: TrackService) { }

  ngOnInit() {
    this._trackService.gettoptracks()
    .subscribe(data => this.toptracks = data);
    console.log("toptracks"+this.toptracks);
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;

  }


onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
}



save(track,i){
  console.log(track);
  console.log(i);
  var date = new Date().getTime();
  var finalid = date.toString();
  var ii = finalid.substr(1, 8);
  var demo;
  
     this._trackService.saveTracks(track,ii).subscribe(data=>demo=data);
   console.log("subscribed data:",demo);
}
}
