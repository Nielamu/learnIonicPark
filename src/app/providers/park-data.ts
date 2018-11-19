import { Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map"
import construct = Reflect.construct;

@Injectable()
export class ParkData {
  data:any = null;

  constructor(public http:Http){

  }

  load() {
    //加载json数据
    if (this.data){
      return Promise.resolve(this.data);
    }
    return new Promise(
      resolve => {
        this.http.get("assets/data/data.json").map(res => res.json()).subscribe(data => {
          this.data=data;
          resolve(this.data);
        })
      }
    );
  }

  getParks(){
    return this.load().then(data => {
      return data;
    })
  }

}
