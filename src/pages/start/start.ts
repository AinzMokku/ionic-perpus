import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events : Events) {
    if(localStorage.getItem("profile")){
      this.events.publish('prof',localStorage.getItem("profile"));
      this.navCtrl.setRoot(HomePage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }
  openPage(){
    this.navCtrl.setRoot(LoginPage);
  }

}
