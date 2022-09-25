import { FormattedMessageChain } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  form:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {
        // los formluarios estan asociados alos modelos,
        // tenemos q tener en cuenta como espera los datos la API.
        // ej: "email":"unmail@mail.com", y "password":"123456",
        // el que envio a una url ..."auth/login"
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit(): void {
  }

  get email(){
    return this.form.get('email');    
  }

  get password(){
    return this.form.get('password');    
  }

}