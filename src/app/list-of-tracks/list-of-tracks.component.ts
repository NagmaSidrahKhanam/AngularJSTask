import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-list-of-tracks',
  templateUrl: './list-of-tracks.component.html',
  styleUrls: ['./list-of-tracks.component.css']
})
export class ListOfTracksComponent implements OnInit {

  public tracks = [];

  constructor(private _trackService: TrackService) { }

  ngOnInit() {
    this._trackService.getTracks()
    .subscribe(data => this.tracks = data);
    console.log(this.tracks)
  }
}
