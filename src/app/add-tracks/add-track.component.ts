import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.css']
})
export class AddTrackComponent implements OnInit {

  public playlist=[];
  public songname='';
  public artistname='';
  public editid='';
  public showform=false;

  constructor(private _trackService: TrackService) { }

  ngOnInit() {
    this._trackService.getTracks()
    .subscribe(data => this.playlist = data);
    console.log("playlist"+this.playlist)
  }

  removetrack(item){
    var succes='false';
  console.log(item.id);
  this._trackService.deletefavorite(item.id).subscribe((data)=>{
     succes = 'true';
      console.log("success");
    
  });
  
  }


  updatetrack(item){
  
    console.log(item)
    this.songname = item.name;
    this.artistname = item.comment;
    this.editid = item.id;
    this.showform=true;
    }
    
    update(){
      console.log(this.songname,this.artistname,this.editid) 
        this.showform=false;
        this._trackService.updatetrack(this.songname,this.artistname,this.editid).subscribe((data)=>{
          console.log('updated');
        })
      
    }
}
