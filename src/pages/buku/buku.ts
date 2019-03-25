import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SingleBukuPage } from '../single-buku/single-buku';

/**
 * Generated class for the BukuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buku',
  templateUrl: 'buku.html',
})
export class BukuPage {

  public buku : any;
  public path : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.path = localStorage.getItem('path');
    this.loadBuku();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BukuPage');
  }
  
  async loadBuku(){
    let data : Observable<any>;
    data = await this.http.get('http://localhost:8000/mobile/get_buku');
    data.subscribe(res => {
     this.buku = res;
     //console.log(res);
    });
  }

  viewBuku(rsBuku){
    this.navCtrl.push(SingleBukuPage,{ buku : rsBuku });
  }
}

