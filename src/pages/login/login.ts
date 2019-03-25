import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  frmLogin : FormGroup;
  valid : any = 1;
  mess : any;
  path : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public FB : FormBuilder,public loading : LoadingController, public events : Events,public menuCtrl : MenuController) {
    this.frmLogin = this.FB.group({
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    });
    this.menuCtrl.enable(false);
    this.path = localStorage.getItem('path');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async Login(){
    if(this.frmLogin.valid==true){

      let data = this.frmLogin.value;

      let headers : any = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');

      let url : any = "http://localhost:8000/mobile/login";

      let load = this.loading.create({
        content : 'Please Wait',
        spinner : 'crescent'
      });
      load.present();

      await this.http.post(url, JSON.stringify(data), headers)
      .subscribe((res : any) => 
      {
        console.log(res)
        load.dismiss();

        if(res.type=="success"){

          this.events.publish("prof",JSON.stringify(res.profile));
          localStorage.setItem("profile",JSON.stringify(res.profile));

          this.navCtrl.setRoot(HomePage);
        } else {
          this.mess = res.msg;
        }
      },
      (error :any) => {
        load.dismiss();
        console.log(error);
        console.log('Something went wrong!');
      });
    } else {
      this.valid=0;
    }
  }

  Registrasi(){
    this.navCtrl.push(RegisterPage);
  }
}
