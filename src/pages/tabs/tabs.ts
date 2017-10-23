import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BluetoothPage } from '../bluetooth/bluetooth';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root      = HomePage;
  bluetoothTab  = BluetoothPage;
  dashboardTab  = DashboardPage;

  constructor() {

  }
}
