import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  constructor(private data: DataService) { }
  invoiceData: any;
  roleAccess: any;
  isUser!: boolean;

  ngOnInit(): void {

    this.roleAccess = localStorage.getItem("role");
    console.log(this.roleAccess);

    if(this.roleAccess == 'Admin'){
      this.isUser = true;
    }else{
      this.isUser = false;
    }

    this.data.getInvoice().subscribe((data: any) => {
      this.invoiceData = data;
      console.log(this.invoiceData);
      
    },
    (error) =>{
      this.invoiceData = error.error;
      console.log(this.invoiceData);
      
    }
    )

  }

}
