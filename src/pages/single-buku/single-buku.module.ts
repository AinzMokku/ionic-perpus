import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleBukuPage } from './single-buku';

@NgModule({
  declarations: [
    SingleBukuPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleBukuPage),
  ],
})
export class SingleBukuPageModule {}
