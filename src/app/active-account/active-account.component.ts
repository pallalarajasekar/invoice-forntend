import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

declare var $: any;

@Component({
  selector: 'app-active-account',
  templateUrl: './active-account.component.html',
  styleUrls: ['./active-account.component.css']
})
export class ActiveAccountComponent implements OnInit {

  constructor(private fb: FormBuilder, private data: DataService, private route: Router, private activeRoute: ActivatedRoute) { }

  formGroup!: FormGroup;
  resetResponse!: string; 
  currenttring!: string;
  currentEmail!: string;
  verfifyData!: string

  ngOnInit(): void {

    let stringURL_data = {
      email: this.activeRoute.snapshot.params.email
    }

    this.data.activatAccount(stringURL_data).subscribe((data: any) => {
      this.verfifyData = data;
      console.log(this.verfifyData);
      $("#exampleModal").modal('show');

      setTimeout( () => {
        $('#exampleModal').modal('hide');
        this.route.navigate(["/login"]);
     }, 3000);

    },
    (error) =>{
      this.verfifyData = error.error;
      console.log(this.verfifyData);
      $("#exampleModal").modal('show');

      setTimeout( () => {
        $('#exampleModal').modal('hide');
        this.route.navigate(["/login"]);

     }, 3000);

    })

  }

}