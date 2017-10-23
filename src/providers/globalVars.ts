import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVars {

    bluetoothName: string;

    constructor() {
        this.bluetoothName = "";
    }

    setBluetoothName(value) {
        this.bluetoothName = value;
    }

    getBluetoothName() {
        return this.bluetoothName;
    }

}