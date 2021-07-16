import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  userName: any
  ngOnInit(): void {

    this.userName = localStorage.getItem("name");
    
  }

  logout(){
    console.log("logout function");
    localStorage.removeItem("responseToken");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    this.route.navigate(["/login"]);
  }

}
