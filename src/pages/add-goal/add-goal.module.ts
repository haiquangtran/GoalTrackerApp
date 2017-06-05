import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddGoalPage } from './add-goal';

@NgModule({
  declarations: [
    AddGoalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddGoalPage),
  ],
  exports: [
    AddGoalPage
  ]
})
export class NewGoalModule {}
