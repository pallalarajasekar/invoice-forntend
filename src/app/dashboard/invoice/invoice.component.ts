import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  

  @ViewChild('htmlData') htmlData!:ElementRef;

  constructor(private fb: FormBuilder, private data: DataService, private route: Router, private activeRoute: ActivatedRoute) { }

  currentid!: string;
  apiError!: string;
  invoiceDetailData: any;
  invoiceName!: string;
  date!: string;
  ngOnInit(): void {

    this.currentid = this.activeRoute.snapshot.params.id;
    
    let selectData = {
      invoiceName: this.currentid
    }
    console.log(selectData);
    this.data.selectInvoice(selectData).subscribe((data: any) => {
      this.invoiceDetailData = data;
      console.log(this.invoiceDetailData);
    },
      (error) => {
        this.apiError = error.error;
        console.log(this.apiError);
        
      }
    )

  }

  DATA: any
  public openPDF():void {
    this.DATA  = document.getElementById('htmlData');
        
    html2canvas(this.DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
      
        
        const FILEURI = canvas.toDataURL('/assets/img/invoice.jpg')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'JPG', 0, position, fileWidth, fileHeight)
        
        PDF.save('invoice.pdf');
    });     
    }

}
