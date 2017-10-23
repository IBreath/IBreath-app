import { Component, ViewChild } from '@angular/core';
import { Nav, Platform }        from 'ionic-angular';
import { StatusBar }            from '@ionic-native/status-bar';
import { SplashScreen }         from '@ionic-native/splash-screen';

import { HomePage }             from '../pages/home/home';
import { BluetoothPage }        from '../pages/bluetooth/bluetooth';
import { DashboardPage }        from '../pages/dashboard/dashboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BluetoothPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Bluetooth', component: BluetoothPage },
      { title: 'Mes données', component: DashboardPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
