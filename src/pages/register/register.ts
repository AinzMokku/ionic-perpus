import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  frmReg : FormGroup;
  valid : any = 1;
  path : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public FB : FormBuilder, public loading : LoadingController) {
    this.frmReg = this.FB.group({
      nama : new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.maxLength(50)
        ])
      ),
      alamat : new FormControl('',Validators.required),
      telp : new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.maxLength(12)
        ])
      ),
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    });
    this.path = localStorage.getItem('path');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async Registrasi(){
    if(this.frmReg.valid==true){

      let data = this.frmReg.value;

      let headers : any = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');

      let url : any = "http://localhost:8000/mobile/registrasi";

      let load = this.loading.create({
        content : 'Please Wait',
        spinner : 'crescent'
      });
      load.present();

      await this.http.post(url, JSON.stringify(data), headers)
      .subscribe((res : any) => 
      {
        load.dismiss();

        if(res.type=="success"){
          this.navCtrl.setRoot(LoginPage);
        } else {
          alert(res.msg);
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
}
