import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ CustomerfoodPage } from '../customerfood/customerfood';

/**
 * Generated class for the CooklocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cooklocation',
  templateUrl: 'cooklocation.html',
})
export class CooklocationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CooklocationPage');
  }
  details(){
    this.navCtrl.push(CustomerfoodPage);
  }
}
