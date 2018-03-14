import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CookdishPage } from '../cookdish/cookdish';

/**
 * Generated class for the CookdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cookdetails',
  templateUrl: 'cookdetails.html',
})
export class CookdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookdetailsPage');
  }
  details(){
    this.navCtrl.push(CookdishPage);
  }

}
