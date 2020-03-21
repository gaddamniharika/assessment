import { Component} from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustFormat } from 'src/customerformat';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent{

  constructor(private cust:CustomerService) { }
  user : CustFormat={
    firstname : null,
    lastname  : null,
    email : null,
    address   : null,
    city      : null,
    state     : null

  };  
  addUser()
  {
    this.cust.addCustomers(this.user).subscribe((data)=>console.log("data inserted"));
  }
}
