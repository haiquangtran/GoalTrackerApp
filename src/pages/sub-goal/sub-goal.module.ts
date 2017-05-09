import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubGoalPage } from './sub-goal';

@NgModule({
  declarations: [
    SubGoalPage,
  ],
  imports: [
    IonicPageModule.forChild(SubGoalPage),
  ],
  exports: [
    SubGoalPage
  ]
})
export class SubGoalModule {}
