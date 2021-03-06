import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BcDetailPage } from '../detail/bc-detail';
import { BcPage } from '../add/bc';

@Component({
  selector: 'page-bc-list',
  templateUrl: 'bc-list.html',
})
export class BcListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad BcPage');
  // }
  gotoBCDetail(){
    this.navCtrl.push(BcDetailPage);
  }
  addBCPage(){
    this.navCtrl.push(BcPage);
  }
}