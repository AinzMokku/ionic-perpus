import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SingleBukuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-buku',
  templateUrl: 'single-buku.html',
})
export class SingleBukuPage {

  buku : any;
  koleksi : any;
  pinjam : any = [];
  path : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.path = localStorage.getItem('path');
    this.buku = this.navParams.get("buku");
    this.loadKoleksi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleBukuPage');
  }

  async loadKoleksi(){
    let data : Observable<any>;
    data = await this.http.get("http://localhost:8000/mobile/get_koleksi/"+this.buku.kd_buku);
    data.subscribe(res => {
      this.koleksi = res;
    });
  }

  savePinjam(no_induk,b){
    if(localStorage.getItem("pinjam")){
      this.pinjam = JSON.parse(localStorage.getItem("pinjam"));
    }
    this.pinjam.push({nib : no_induk,judul : b.judul,cover : b.cover});
    localStorage.setItem("pinjam",JSON.stringify(this.pinjam));
  }

  cekKode(nib){
    if(localStorage.getItem("pinjam")){
      let datapinjam = JSON.parse(localStorage.getItem("pinjam"));
      let cekkode = datapinjam.filter(data => data.nib==nib)
      if(cekkode.length>0){
        return 'hidetombol'
      }
    }

    return ''
  }
}
