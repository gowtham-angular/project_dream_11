import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDreamTeamsComponent } from './view-dream-teams/view-dream-teams.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-dream-team',
    pathMatch: 'full'
  },
  {
    path: 'view-dream-team',
    component: ViewDreamTeamsComponent
  }
  

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DreamTeamRoutingModule {}
