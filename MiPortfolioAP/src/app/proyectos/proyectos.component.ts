import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  misProyectos:any;

  constructor(private datosPortfolio:PortfolioService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosProyectos().subscribe(data =>{
      this.misProyectos = data; 
    })
  }

  refreshList() {
    this.ngOnInit();
  }

  isLoggedIn(): boolean {
    return this.autenticacionService.isUserLoggedIn();
  }

}
