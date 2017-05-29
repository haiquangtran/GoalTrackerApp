import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeColorPopoverPage } from './change-color-popover';

@NgModule({
  declarations: [
    ChangeColorPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeColorPopoverPage),
  ],
  exports: [
    ChangeColorPopoverPage
  ]
})
export class ChangeColorPopoverModule {}
