import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-proyectos',
  templateUrl: './edicion-proyectos.component.html',
  styleUrls: ['./edicion-proyectos.component.css']
})
export class EdicionProyectosComponent implements OnInit {


  @Input() thisProy: any;
  @Output() modEvent = new EventEmitter();
  thisSelected: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
  }

  onClickDelete() {
    this.datosPortfolio.borrarDatosProyectos(this.thisProy.id)
      .subscribe(data => {
        this.refreshList();
      })
  }

  onClickUpdate() {
    this.datosPortfolio.buscarDatosProyecto(this.thisProy.id)
      .subscribe(data => {
        this.thisSelected = data;
      })
  }

  refreshList() {
    this.modEvent.emit();
  }

}
