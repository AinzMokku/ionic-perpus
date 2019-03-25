import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StartPage } from '../pages/start/start';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { SingleBukuPage } from '../pages/single-buku/single-buku';
import { BukuPage } from '../pages/buku/buku';
import { ListPage } from '../pages/list/list';
import { PeminjamanPage } from '../pages/peminjaman/peminjaman';

import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from "@angular/common/http";
import { CartPage } from '../pages/cart/cart';
import { MemberPage } from '../pages/member/member';

@NgModule({
  declarations: [
    MyApp,
    StartPage,
    LoginPage,
    RegisterPage,
    HomePage,
    ListPage,
    PeminjamanPage,
    BukuPage,
    SingleBukuPage,
    CartPage,
    MemberPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    LoginPage,
    RegisterPage,
    HomePage,
    ListPage,
    PeminjamanPage,
    BukuPage,
    SingleBukuPage,
    CartPage,
    MemberPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
