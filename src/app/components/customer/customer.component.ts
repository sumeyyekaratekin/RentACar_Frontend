import { Component, OnInit } from '@angular/core';
import { Customer, CustomerDetail } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: CustomerDetail[] = [];

  dataLoaded = false;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    this.customerService.getCustomerDetails().subscribe((response) => {
      this.customers = response.data;
      this.dataLoaded = true;
    });
  }

}
