import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  miEducacion:any;

  constructor(private datosPortfolio:PortfolioService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosEducacion().subscribe(data =>{
      this.miEducacion = data; 
    })
  }

  refreshList() {
    this.ngOnInit();
  }

  isLoggedIn(): boolean {
    return this.autenticacionService.isUserLoggedIn();
  }


}
