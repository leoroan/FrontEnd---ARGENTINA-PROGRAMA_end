import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
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
