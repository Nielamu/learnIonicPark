import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ParkData} from "../../app/providers/park-data";
import { ParkDetailsPage } from "../park-details/park-details";
import { Park } from "../../app/inteface/park";

/*
  Generated class for the ParkList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html'
})
export class ParkListPage {
  parks:Array<Park>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public parkData:ParkData) {
    parkData.getParks().then(theResult => {
      this.parks=theResult;
    })
  }

  goParkDetails(theParkData){
    console.log(theParkData);
    this.navCtrl.push(ParkDetailsPage,{parkData:theParkData});//传入参数
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkListPage');
  }

}
