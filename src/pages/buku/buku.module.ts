import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BukuPage } from './buku';

@NgModule({
  declarations: [
    BukuPage,
  ],
  imports: [
    IonicPageModule.forChild(BukuPage),
  ],
})
export class BukuPageModule {}
