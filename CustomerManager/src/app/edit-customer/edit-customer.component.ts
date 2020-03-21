import { Component} from '@angular/core';
import { CustFormat } from 'src/customerformat';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {

  constructor(private cust : CustomerService) { }
  user : CustFormat={
    firstname : null,
    lastname  : null,
    email : null,
    address   : null,
    city      : null,
    state     : null

  };  
  editUser()
  {
    
  }
  deleteUser()
  {
    this.cust.addCustomers(this.user).subscribe((data)=> console.log("data deleted"));
  }

}
