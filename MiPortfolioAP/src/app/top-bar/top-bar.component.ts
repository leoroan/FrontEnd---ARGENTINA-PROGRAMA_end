import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent implements OnInit {

  form:FormGroup;

  constructor( private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(10)]]
      }
    )
  }

  ngOnInit(): void {
  }

  get email (){
    return this.form.get('email');
  }

  get password (){
    return this.form.get('password');
  }



}
