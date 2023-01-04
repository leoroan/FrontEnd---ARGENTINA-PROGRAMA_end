import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardysoft',
  templateUrl: './hardysoft.component.html',
  styleUrls: ['./hardysoft.component.css']
})
export class HardysoftComponent implements OnInit {
  isLoggedIn:boolean = false;

  constructor() { 
   }

  ngOnInit(): void {
  }

  setLoggIn(){
    this.isLoggedIn = true;
  }
  setLoggOut(){
    this.isLoggedIn = false;
  }

}
