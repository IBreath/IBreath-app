import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { GlobalVars} from '../../providers/globalVars';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public measures: any;

  constructor( public bluetoothSerial: BluetoothSerial, public gv: GlobalVars){
  }

    data1() {
        this.bluetoothSerial.write('1').then(data => {
            console.log(data)
        }, data => {
            console.error(data)
        });

      console.log('data1');
    }

    data2() {
        this.bluetoothSerial.write('0').then(data => {
            console.log(data)
        }, data => {
            console.error(data)
        });
      console.log('data2');
        // this.bluetoothSerial.write(1).then(success, failure);

    }
}