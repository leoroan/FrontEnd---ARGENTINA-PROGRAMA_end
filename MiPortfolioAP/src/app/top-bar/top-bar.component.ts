import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  setLoggIn() {
    this.isLoggedIn = true;
  }
  setLoggOut() {
    this.isLoggedIn = false;
  }

}
