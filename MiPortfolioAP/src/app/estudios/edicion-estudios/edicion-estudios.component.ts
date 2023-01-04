import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicion-estudios',
  templateUrl: './edicion-estudios.component.html',
  styleUrls: ['./edicion-estudios.component.css']
})
export class EdicionEstudiosComponent implements OnInit {

  @Input() isLoggedIn: any;
  constructor() { }

  ngOnInit(): void {
  }

}
