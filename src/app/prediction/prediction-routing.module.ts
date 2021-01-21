import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSquadsComponent } from './create-squads/create-squads.component';
import { PredictTeamsComponent } from './predict-teams/predict-teams.component';
import { FilterPatternsComponent } from './filter-patterns/filter-patterns.component';
import { ViewTeamsComponent } from './view-teams/view-teams.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-squads',
    pathMatch: 'full'
  },
  {
    path: 'create-squads',
    component: CreateSquadsComponent
  },
  {
      path: 'predict-teams',
      component: PredictTeamsComponent,
  },
  {
      path: 'filter-patterns',
      component: FilterPatternsComponent
  },
  {
    path: 'view-teams',
    component: ViewTeamsComponent
}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictionRoutingModule {}
