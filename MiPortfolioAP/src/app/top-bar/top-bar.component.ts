import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent implements OnInit {
  
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) {    
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersona().subscribe(data =>{
      //console.log("datos personales"+ JSON.stringify(data[0]));
      this.miPortfolio = data[0]; 
    })
  }





}
