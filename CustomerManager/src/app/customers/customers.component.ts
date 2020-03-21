import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private cust:CustomerService){ }
  customer;
  ngOnInit(): void {
    this.cust.viewCustomers().subscribe((data) => this.customer = data);
  }

}
