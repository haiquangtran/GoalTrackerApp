import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { Ng2FittextModule } from 'ng2-fittext/ng2fittext';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    Ng2FittextModule
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule {}
