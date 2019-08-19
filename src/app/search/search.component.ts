import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  trackname:string;
  constructor(private trackService : TrackService, private router : Router
    ) { }

    ngOnInit() {
  }
  
  search():any
  {
    console.log(this.trackname);
    this.router.navigate(['/searchString',this.trackname]);
  }
}
