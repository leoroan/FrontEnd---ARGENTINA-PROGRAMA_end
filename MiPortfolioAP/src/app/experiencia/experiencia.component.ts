import { Component, Input, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  miExperiencia:any;

  constructor(private datosPortfolio:PortfolioService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosExperiencias().subscribe(data =>{
      this.miExperiencia = data; 
    })
  }

  refreshList() {
    this.ngOnInit();
  }
  
  isLoggedIn(): boolean {
    return this.autenticacionService.isUserLoggedIn();
  }

}
