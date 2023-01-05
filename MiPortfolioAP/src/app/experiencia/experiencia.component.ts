import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  miExperiencia:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosExperiencias().subscribe(data =>{
      //console.log("exp personales"+ JSON.stringify(data));
      this.miExperiencia = data; 
    })
  }
  

}
