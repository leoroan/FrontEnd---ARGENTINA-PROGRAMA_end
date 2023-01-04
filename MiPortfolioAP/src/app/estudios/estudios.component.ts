import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

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
