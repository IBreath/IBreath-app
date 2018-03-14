import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import * as Constant from '../../app/constants';

@Injectable()
export class MeasureService {

  measures : any;

  constructor(public http: Http) {
  }

  setMeasure(userId, value) {
      return new Promise(resolve => {
          this.http.post(Constant.API_ENDPOINT + '/measures/' + userId, { 'value' : value })
              .map(res => res.json())
              .subscribe(data => {
                  console.log(data);
                  // this.measures = data;
                  // resolve(this.measures);
              });
      });
  }

  findMeasures() {
    if (this.measures) {
      return Promise.resolve(this.measures);
    }

    return new Promise(resolve => {
      this.http.get(Constant.API_ENDPOINT + '/measures/10/1')
          .map(res => res.json())
          .subscribe(data => {
            this.measures = data;
            resolve(this.measures);
          });
    });
  }

}
