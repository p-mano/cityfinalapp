import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomerService from '../customer.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private customerService:CustomerService,public loadingController: LoadingController,public alertController: AlertController) { }
 customers=[];
 customer={email:"",password:"",}
 res:any={};
  ngOnInit() {
    // this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result})
  }
  async doLogin(customer){
    this.customerService.getRemoteCustomers(customer).subscribe((result) => {
      console.log(result);
      this.res=result;
      console.log('res===>',this.res)
      localStorage.setItem('customer',JSON.stringify(result))
      
    if(this.res.result[0].password==customer.password){
  
      console.log('iam here lalala')
          this.router.navigate(['/tabs/tab1']);
          
    }
    else {
      // console.log('failed to login')
      this.invalidUser();
      this.customer={
        email:'',
        password:''
      }
    }
    });
    const loading = await this.loadingController.create({
      message: 'Loading',
      duration: 2000
    });
    await loading.present();
    // console.log('Loading dismissed!');
  //  for(var i=0;i<this.customers.length;i++) {
  //   if((customer.email==this.customers[i].email) && (customer.password == this.customers[i].password)){
  //     console.log(customer);
  //     this.router.navigate(['/tabs/tab1']);
  //     if (localStorage.getItem('user')==null)
  //     {
  //       localStorage.setItem('user', JSON.stringify(customer)); 
  //     }
  //     const { role, data } = await loading.onDidDismiss();
  //   }
   
  //  }


}
loginFacebook(){
  console.log("Function is qorking");
  window.open('https://en-gb.facebook.com/login/');
}
forget(){
  this.router.navigate(['/forgetpassword'])
}
register(){
  this.router.navigate(['/register'])
}
async invalidUser() {
  const alert = await this.alertController.create({
    subHeader: 'Email or password is Invalid',
   
    buttons: ['Cancel']
  });

  await alert.present();
}

}