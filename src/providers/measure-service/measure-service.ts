import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import * as Constant from '../../app/constants';

@Injectable()
export class MeasureService {

  measures : any;

  constructor(public http: Http) {
  }

  findMeasures() {
    if (this.measures) {
      return Promise.resolve(this.measures);
    }

    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get(Constant.API_ENDPOINT + '/measure/10/1')
          .map(res => res.json())
          .subscribe(data => {
            this.measures = data;
            console.log(JSON.stringify(data));
              resolve(this.measures);
          });
    });
  }

}
