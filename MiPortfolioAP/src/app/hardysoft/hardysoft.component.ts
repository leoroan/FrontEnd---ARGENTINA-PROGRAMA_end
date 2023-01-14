import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-hardysoft',
  templateUrl: './hardysoft.component.html',
  styleUrls: ['./hardysoft.component.css']
})
export class HardysoftComponent implements OnInit {
  
  misHabilidades:any;

  constructor(private datosPortfolio:PortfolioService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHabilidades().subscribe(data =>{
      this.misHabilidades = data; 
    })
  }

  refreshList() {
    this.ngOnInit();
  }

  isLoggedIn(): boolean {
    return this.autenticacionService.isUserLoggedIn();
  }

}
