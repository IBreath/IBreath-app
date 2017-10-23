import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})
export class BluetoothPage {

  unpairedDevices:  any;
  pairedDevices:    any;
  gettingDevices:   Boolean;

  constructor(public navCtrl: NavController, private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    bluetoothSerial.enable();
  }

  startScanning() {
    this.pairedDevices    = null;
    this.unpairedDevices  = null;
    this.gettingDevices   = true;

    this.bluetoothSerial.discoverUnpaired().then((devices) => {
          this.unpairedDevices  = devices;
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


  success   = (data)  => alert(data);
  fail      = (error) => alert(error);


  selectDevice(address: any) {

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