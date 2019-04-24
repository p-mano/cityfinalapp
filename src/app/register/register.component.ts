import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import CustomerService from '../customer.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private CustomerService:CustomerService) { }
  customer = {};
  ngOnInit() {}
  addCustomer(customer){
  	this.CustomerService.addRemoteCustomer(customer).subscribe((e)=>{this.router.navigate(['/login']);});
  }
  login(){
    this.router.navigate(['/login'])
  }
}
