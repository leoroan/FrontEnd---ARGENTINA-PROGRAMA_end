import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent implements OnInit {
  @Input() isLoggedIn: any;
  constructor() {
  }

  ngOnInit(): void {
  }

  logButonText():String{
    if (this.isLoggedIn) {
      return "LogOut"
    }else{
      return "LogIn";
    }    
  }

}
