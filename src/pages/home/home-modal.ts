import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'home-modal.html',
})
export class HomeModal {
    constructor(
        public viewCtrl: ViewController
    ) {

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}