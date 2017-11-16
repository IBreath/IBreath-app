import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { GlobalVars} from '../../providers/globalVars';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})
export class BluetoothPage {

  unpairedDevices:  any;
  pairedDevices:    any;
  gettingDevices:   Boolean;
  clickedBluetoothName: string;

  constructor(public navCtrl: NavController, private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController, public gv: GlobalVars) {
    bluetoothSerial.enable();

  }

  startScanning() {
    this.pairedDevices    = null;
    this.unpairedDevices  = null;
    this.gettingDevices   = true;

    this.bluetoothSerial.discoverUnpaired().then((devices) => {
          this.unpairedDevices = devices.filter((device, index, self) => self.findIndex((t) => {return t.address === device.address; }) === index);
          this.gettingDevices   = false;
          devices.forEach(device => {
            console.log(device.name);
          });
        },
        (err) => {
          console.log(err);
        }
    );

    this.bluetoothSerial.list().then((devices) => {
          this.pairedDevices = devices;
        },
        (err) => {

        }
      );
  }


  success   = (name)  => {
    this.gv.setBluetoothName(this.clickedBluetoothName);
    this.navCtrl.push(HomePage);
  };

  fail      = (error) => alert(error);


  selectDevice(address: any, name: string) {

    let alert = this.alertCtrl.create({
      title: 'Connexion',
      message: 'Voulez-vous vous connecter ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connexion',
          handler: () => {
            this.clickedBluetoothName = name;
            this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    alert.present();
  }


  disconnect() {
    let alert = this.alertCtrl.create({
      title: 'Déconnexion ?',
      message: 'Voulez-vous vous déconnecter ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Déconnexion',
          handler: () => {
            this.bluetoothSerial.disconnect();
            this.unpairedDevices = null;
            this.pairedDevices = null;
            this.gettingDevices = false;
          }
        }
      ]
    });
    alert.present();
  }
}