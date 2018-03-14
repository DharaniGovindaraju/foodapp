import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ CooklocationPage } from '../cooklocation/cooklocation';

/**
 * Generated class for the CookdishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cookdish',
  templateUrl: 'cookdish.html',
})
export class CookdishPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookdishPage');
  }
  details(){
    this.navCtrl.push(CooklocationPage);
  }

}
