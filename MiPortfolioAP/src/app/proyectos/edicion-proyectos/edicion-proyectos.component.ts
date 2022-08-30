import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicion-proyectos',
  templateUrl: './edicion-proyectos.component.html',
  styleUrls: ['./edicion-proyectos.component.css']
})
export class EdicionProyectosComponent implements OnInit {

  @Input() isLoggedIn: any;
  constructor() { }

  ngOnInit(): void {
  }

}
