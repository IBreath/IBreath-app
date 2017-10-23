import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { GlobalVars} from '../../providers/globalVars';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public measures: any;

  public test: any;

  constructor( public bluetoothSerial: BluetoothSerial, public gv: GlobalVars){

      this.bluetoothSerial.subscribe('\r\n').subscribe((success) => {
          console.log(JSON.stringify(success));
      }, (error) => {
          console.log(JSON.stringify(error));

      });

      // this.bluetoothSerial.subscribeRawData().subscribe(
      //     (data) => {
      //
      //         this.bluetoothSerial.read().then(
      //             (data) => {
      //                 // console.log(JSON.stringify(data));
      //                 var buffer = new Uint8Array(data);
      //                 console.log(JSON.stringify(buffer));
      //             },
      //             (error) => {
      //                 console.log('error in getting the data');
      //                 console.log(JSON.stringify(error));
      //             }
      //         );
      //     },
      // );

  }

  read() {
      var data = this.bluetoothSerial.read().then(data => {
          console.log(JSON.stringify(data));
      });

  }
    onData(data) {
        console.log(JSON.stringify(data));
    }

    onFailed(data) {
        console.log(JSON.stringify(data));
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