import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  private customerUrl = 'http://192.168.1.19:3000/api/customers';
  private loginUrl = 'http://192.168.1.19:3000/api/login';

  constructor( private http: HttpClient){}
Customers=[];
customer:any={};
// getRemoteCustomers(): Observable<[]>{
//   return this.http.get<[]>(this.customerUrl); 		
// }
addRemoteCustomer(customer):Observable<any>{
  return this.http.post(this.customerUrl,customer);
}
getRemoteCustomerPassword(phone):Observable<[]>{
  return this.http.get<[]>(this.customerUrl+"/"+phone); 	
}
getRemoteCustomers(customer){
return this.http.post(this.loginUrl,customer)
}
}
