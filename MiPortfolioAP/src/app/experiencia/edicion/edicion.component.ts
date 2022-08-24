import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  @Input() isLoggedIn: any;

  constructor() { }

  ngOnInit(): void {
  }

}
