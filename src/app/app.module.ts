import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgetpasswordComponent } from "./forgetpassword/forgetpassword.component";
import { PaymentComponent } from "./payment/payment.component";
import {PaymentdoneComponent} from './paymentdone/paymentdone.component';
import {BookingComponent} from './booking/booking.component';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent,ForgetpasswordComponent,PaymentComponent,PaymentdoneComponent,BookingComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    IonicStorageModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
