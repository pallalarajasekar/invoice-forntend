import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

declare var $: any;

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private data: DataService, private route: Router, private datePipe: DatePipe) { }

  formGroup!: FormGroup;
  createUserData: any;
  invoiceData!: string;
  invoice_date!: any;

  ngOnInit(): void {

    let date = new Date();
    this.invoice_date = this.datePipe.transform(date, 'MMM dd, yyyy');

    this.formGroup = this.fb.group({

      invoiceName: ['', [Validators.required]],
      date: [this.invoice_date, [Validators.required]],
      companyName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      toname: ['', [Validators.required]],
      toaddress: ['', [Validators.required]],
      tocity: ['', [Validators.required]],
      toemail: ['', [Validators.required]],
      tophone: ['', [Validators.required]],
      item: ['', [Validators.required]],
      item_desc: ['', [Validators.required]],
      price: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      total: ['', [Validators.required]],
      subtotal: ['', [Validators.required]],
      vat: ['', [Validators.required]],
      grand_total: ['', [Validators.required]],

    })


  }
  createInvoice() {
    console.log(this.formGroup.value);

    let invoiceInputs = {
      "invoiceName": this.formGroup.value.invoiceName,
      "date": this.formGroup.value.date,
      "cmpny_address": {
        "companyName": this.formGroup.value.companyName,
        "address": this.formGroup.value.address,
        "city": this.formGroup.value.city,
        "email": this.formGroup.value.email,
        "phone": this.formGroup.value.phone,
      },
      "user_address": {
        "toname": this.formGroup.value.toname,
        "toaddress": this.formGroup.value.toaddress,
        "tocity": this.formGroup.value.tocity,
        "toemail": this.formGroup.value.toemail,
        "tophone": this.formGroup.value.tophone,
      },
      "item_details": {
        "item": this.formGroup.value.item,
        "item_desc": this.formGroup.value.item_desc,
        "price": this.formGroup.value.price,
        "qty": this.formGroup.value.qty,
        "total": this.formGroup.value.total,
      },
      "tax": {
        "subtotal": this.formGroup.value.subtotal,
        "vat": this.formGroup.value.vat,
        "grand_total": this.formGroup.value.grand_total,
      }
    }
    console.log(invoiceInputs);
    this.data.addInvoice(invoiceInputs).subscribe((data: any) => {
      this.invoiceData = data;
      console.log(this.invoiceData);
      this.route.navigate(["/dashboard/invoice-list"]);

    },
      (error) => {
        this.invoiceData = error.error;
        console.log(this.invoiceData);

      }
    )
  }

}
