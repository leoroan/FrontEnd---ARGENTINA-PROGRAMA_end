import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';


@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      //console.log("datos personales"+ JSON.stringify(data[0]));
      this.miPortfolio = data[0];  //??? ver donde estan cuando se haga
    })
  }
  
}
