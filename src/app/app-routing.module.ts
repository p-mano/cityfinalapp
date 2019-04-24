import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgetpasswordComponent } from "./forgetpassword/forgetpassword.component";
import { PaymentComponent } from "./payment/payment.component";
import {PaymentdoneComponent} from './paymentdone/paymentdone.component';
import {BookingComponent} from './booking/booking.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'payment',component:PaymentComponent},
  {path:'paymentdone',component:PaymentdoneComponent},
  {path:'booking/:id',component:BookingComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
