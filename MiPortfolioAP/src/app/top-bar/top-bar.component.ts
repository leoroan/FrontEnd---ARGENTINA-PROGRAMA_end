import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent implements OnInit {
  @Input() isLoggedIn: any;
  @Output() logoutClick = new EventEmitter();
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

  onLogOutButtonClick(){
    this.logoutClick.emit()
  }

}
