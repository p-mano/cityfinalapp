import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomerService from '../customer.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent implements OnInit {

  customer:any={};
  password:any={};

  constructor(private router: Router,private customerService:CustomerService) { }

  ngOnInit() {
  }
    reset(){
       this.customerService.getRemoteCustomerPassword(this.customer.phone).subscribe((customer)=>{
         this.password=customer;  
         console.log(customer);
         alert('This is Your PassWord '+ this.password[0].password);
       });
    }
  
    forget(){
      this.router.navigate(['/forgetpassword'])
    }
    register(){
      this.router.navigate(['/register'])
    }
}
