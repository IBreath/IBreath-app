import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeasureService } from '../../providers/measure-service/measure-service';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [MeasureService]
})
export class DashboardPage {

  public measures: any;

  constructor(public navCtrl: NavController, public measureService: MeasureService) {
    this.findMeasure();
  }

  findMeasure(){
    this.measureService.findMeasures()
        .then(data => {
              this.measures = data;
        });

    // this.measureService.setMeasure(1, 1.7)
    //     .then(data => {
    //       console.log(data);
    //     });

    this.measureService.findMeasures()
        .then(data => {
          this.measures = data;
        });
  }

}