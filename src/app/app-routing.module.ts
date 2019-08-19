import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTrackListComponent } from './search-track-list/search-track-list.component';
import { ToptracksComponent } from './toptracks/toptracks.component';
import { AddTrackComponent } from './add-tracks/add-track.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
 {
   path:'home',component:ToptracksComponent
 },
 {
   path:'playlist',component:AddTrackComponent
 },
 {
   path:'searchplaylist', component: SearchComponent
 },
//  for dispaying search data
 {
   path:'searchString/:trackname', component : SearchTrackListComponent
 },
 {
   path:'',redirectTo :'home',pathMatch:'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[
  SearchComponent,
  SearchTrackListComponent,
  // PlaylistComponent,
  ToptracksComponent,
  AddTrackComponent
 ]
