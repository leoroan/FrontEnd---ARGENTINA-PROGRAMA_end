import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent implements OnInit {

  miPortfolio: any;
  constructor(private ruta: Router, private datosPortfolio: PortfolioService, private autenticacionService: AutenticacionService) {
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersona().subscribe(data => {
      //console.log("datos personales"+ JSON.stringify(data[0]));
      this.miPortfolio = data[0];
    })
  }


  isLoggedIn(): boolean {
    return this.autenticacionService.isUserLoggedIn();
  }

  logOuted() {
    this.autenticacionService.logout();
    this.ruta.navigateByUrl("/acercade");
    console.log("loged out!")
  }


}
