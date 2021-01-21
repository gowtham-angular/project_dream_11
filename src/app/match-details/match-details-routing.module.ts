import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { ViewScoreCardComponent } from './view-score-card/view-score-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'player-details',
    pathMatch: 'full'
  },
  {
    path: 'player-details',
    component: PlayerDetailsComponent
  },
  {
      path: 'score-card',
      component: ScoreCardComponent,
  },
  {
      path: 'view-score-card',
      component: ViewScoreCardComponent
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchDetailsRoutingModule {}
