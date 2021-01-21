import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDreamTeamsComponent } from './view-dream-teams/view-dream-teams.component';
import { DreamTeamRoutingModule } from './dream-team-routing.module';



@NgModule({
  declarations: [ViewDreamTeamsComponent],
  imports: [
    CommonModule,
    DreamTeamRoutingModule
  ]
})
export class DreamTeamModule { }
