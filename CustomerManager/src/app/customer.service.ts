import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient){ }
  viewCustomers(){
    return this.http.get("http://localhost:1000/Customers");
  }
  addCustomers(user)
  {
    return this.http.post("http://localhost:1000/addcustomer",user);
  } 
  deleteUser(user)
  {
    return this.http.delete("http://localhost:1000/customers/:name"+user)
  }
}
