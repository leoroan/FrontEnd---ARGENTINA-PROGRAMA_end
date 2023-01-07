import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-proyectos',
  templateUrl: './edicion-proyectos.component.html',
  styleUrls: ['./edicion-proyectos.component.css']
})
export class EdicionProyectosComponent implements OnInit {

  
  @Input() thisProy: any;
  @Output() deleteEvent = new EventEmitter();
  
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  }

  onClickDelete(){
    this.datosPortfolio.borrarDatosProyectos(this.thisProy)
      .subscribe(data =>{       
        console.log("Deleted id: "+this.thisProy);
        //location.reload();
        this.deleteEvent.emit();
    })
  }

}
