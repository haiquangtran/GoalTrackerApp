import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSubGoalPage } from './add-sub-goal';

@NgModule({
  declarations: [
    AddSubGoalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSubGoalPage),
  ],
  exports: [
    AddSubGoalPage
  ]
})
export class SubGoalModule {}
