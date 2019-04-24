import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router,private location:Location) { }

  ngOnInit() {}
  goback(){
    this.location.back();
  }
  doLogin(){
    // if(this.data.username == this.data.password){
      this.router.navigate(['/paymentdone']);
    }
}
