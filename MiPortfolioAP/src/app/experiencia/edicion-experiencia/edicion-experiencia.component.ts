import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicion-experiencia',
  templateUrl: './edicion-experiencia.component.html',
  styleUrls: ['./edicion-experiencia.component.css']
})
export class EdicionExperienciaComponent implements OnInit {

  @Input() isLoggedIn: any;

  constructor() { }

  ngOnInit(): void {
  }

}
