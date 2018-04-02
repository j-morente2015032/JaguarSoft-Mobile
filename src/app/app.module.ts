import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from './service/auth.service';
import { ClientPage } from '../pages/client/client';
import { CategorysPage } from '../pages/client/categorys/categorys';
import { FavoritesPage } from '../pages/client/favorites/favorites';
import { ProductsPage } from '../pages/client/products/products';
import { InvoicesPage } from '../pages/client/invoices/invoices';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ClientPage,
      CategorysPage,
      FavoritesPage,
      ProductsPage,
      InvoicesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ClientPage,
      CategorysPage,
      FavoritesPage,
      ProductsPage,
      InvoicesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
