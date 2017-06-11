import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { MyData } from '../providers/my-data';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, 
    // {
    //   mode: 'ios'
    // }
    ),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    MyData,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
