import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicion-hardysoft',
  templateUrl: './edicion-hardysoft.component.html',
  styleUrls: ['./edicion-hardysoft.component.css']
})
export class EdicionHardysoftComponent implements OnInit {

  @Input() isLoggedIn: any;
  constructor() { }

  ngOnInit(): void {
  }

}
