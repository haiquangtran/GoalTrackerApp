import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubGoalDetailsPage } from './sub-goal-details';

@NgModule({
  declarations: [
    SubGoalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SubGoalDetailsPage),
  ],
  exports: [
    SubGoalDetailsPage
  ]
})
export class SubGoalDetailsModule {}
