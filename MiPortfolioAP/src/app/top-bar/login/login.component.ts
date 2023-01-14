import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    user: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  });

  constructor(private autenticacionService: AutenticacionService, private ruta: Router) {
  }

  ngOnInit(): void {
  }

  get user() {
    return this.form.get('user');
  }

  get password() {
    return this.form.get('password');
  }

  send(data: any) {
    this.autenticacionService.iniciarSesion(data);
    //this.ruta.navigateByUrl("/acercade");
    this.form.reset();    
  }



}
