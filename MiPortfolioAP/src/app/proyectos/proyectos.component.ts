import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
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
