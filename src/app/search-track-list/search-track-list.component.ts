import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-search-track-list',
  templateUrl: './search-track-list.component.html',
  styleUrls: ['./search-track-list.component.css']
})
export class SearchTrackListComponent implements OnInit {

  public searchplaylist;
  public tracks=[];
  constructor(private muzixService: TrackService, private route: ActivatedRoute) {
  }
// after searching, displaying the data
  ngOnInit() {
   
  this.searchplaylist = this.route.snapshot.paramMap.get('trackname');
  // console.log('IN LAST FM :' + this.searchplaylist);
  this.muzixService.getSearch(this.searchplaylist).subscribe(data => this.tracks = data );
     // this.tracks = this.result.results.trackmatches.track;

  }
  save(track,i){
    console.log(track);
    console.log(i);
    var date = new Date().getTime();
    var finalid = date.toString();
    var id1 = finalid.substr(1, 8);
    var demo;
    
       this.muzixService.savetracks(track,id1).subscribe(data=>demo=data);
     console.log("subscribed data:",demo);
  }
 
  // }
}

