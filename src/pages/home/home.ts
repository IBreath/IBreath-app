import {Component, NgZone} from '@angular/core';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial';
import {GlobalVars} from '../../providers/globalVars';
import {ModalController, NavController, ViewController} from 'ionic-angular';
import {HomeModal} from './home-modal';
import {BluetoothPage} from "../bluetooth/bluetooth";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    public measures: any;

    public value: number;

    public isCalibrating: boolean;

    public isEnding: boolean;

    public isMoreThanLimit: boolean;

    constructor(public bluetoothSerial: BluetoothSerial,
                public gv: GlobalVars,
                public ngZone: NgZone,
                public modalCtrl: ModalController,
                public navCtrl: NavController,) {
        this.value          = 0;
        this.isCalibrating  = false;
        this.isEnding       = false;
        this.isMoreThanLimit = false;
        this.subscribe();
    }

    subscribe() {
        this.bluetoothSerial.subscribe('\r\n').subscribe((success) => {

            // gv.setBluetoothName()
            console.log(success);

            if (success.includes('x0')) { // Début calibrage
                this.ngZone.run(() => {
                    this.value          = 0;
                    this.isCalibrating  = true;
                    this.isEnding       = false;
                });
            }

            if (success.includes('x1')) { // Fin calibrage
                this.ngZone.run(() => {
                    this.isCalibrating = false;
                });
            }

            if (success.includes('x2')) { // Fin prise de mesure
                // let modal = this.modalCtrl.create(HomeModal);
                // modal.present();
                this.ngZone.run(() => {
                    this.isEnding = true;
                });
            }

            if (success.includes('v=')) {
                this.ngZone.run(() => {
                    this.value = +success.replace('v=', '');
                    this.isCalibrating = false;
                    if (this.value > 0.25) {
                        this.isMoreThanLimit = true;
                    } else {
                        this.isMoreThanLimit = false;
                    }
                });
            }

        }, (error) => {
            console.log(JSON.stringify(error));
        });
    }

    goToBluetoothPage() {
        this.navCtrl.push(BluetoothPage);
    }
}