import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BluetoothPage } from '../pages/bluetooth/bluetooth';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { MeasureService} from '../providers/measure-service/measure-service';

import { HttpModule } from '@angular/http';

import {GlobalVars} from '../providers/globalVars';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BluetoothPage,
    DashboardPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BluetoothPage,
    DashboardPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MeasureService,
    GlobalVars,
  ]
})
export class AppModule {
}
