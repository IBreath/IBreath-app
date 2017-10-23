import { Component } from '@angular/core';
import { MeasureService } from '../../providers/measure-service/measure-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MeasureService]
})
export class HomePage {

  public measures: any;

  constructor(public measureService: MeasureService){
    this.findMeasure();
  }

  findMeasure(){
    this.measureService.findMeasures()
        .then(data => {
          this.measures = data;
          console.log(JSON.stringify(data));
        });
    }
}