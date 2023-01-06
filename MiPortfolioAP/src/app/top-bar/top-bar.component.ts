import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent implements OnInit {

  form:FormGroup;
  miPortfolio:any;

  constructor( private formBuilder:FormBuilder, private datosPortfolio:PortfolioService) {
    this.form = this.formBuilder.group(
      {
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(10)]]
      }
    )
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersona().subscribe(data =>{
      //console.log("datos personales"+ JSON.stringify(data[0]));
      this.miPortfolio = data[0]; 
    })
  }

  get email (){
    return this.form.get('email');
  }

  get password (){
    return this.form.get('password');
  }



}
