import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PeminjamanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peminjaman',
  templateUrl: 'peminjaman.html',
})
export class PeminjamanPage {

  order : any;
  pinjam : any;
  kembali : any ;
  path : any;
  perpus : any;
  noanggota : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : HttpClient) {
    this.path = localStorage.getItem('path');
    let user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);
    this.noanggota = user.no_anggota;
    this.loadPinjam();
    this.loadKembali();
    this.loadOrders();
    this.perpus ='orders';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeminjamanPage');
  }
  
  async loadOrders(){
    let data : Observable<any>;
    data = await this.http.get('http://localhost:8000//mobile/get_pinjam/2/'+this.noanggota);
    data.subscribe(res => {
      this.order = res;
      console.log(res);
    });
  }

  async loadPinjam(){
    let data : Observable<any>;
    data = await this.http.get('http://localhost:8000/mobile/get_pinjam/0/'+this.noanggota);
    data.subscribe(res => {
      this.pinjam = res;
      console.log(res);
    });
  }

   async loadKembali(){
    let data : Observable<any>;
    data = await this.http.get('http://localhost:8000/mobile/get_pinjam/1/'+this.noanggota);
    data.subscribe(res => {
      this.kembali = res;
      console.log(res);
    });
  }

}
