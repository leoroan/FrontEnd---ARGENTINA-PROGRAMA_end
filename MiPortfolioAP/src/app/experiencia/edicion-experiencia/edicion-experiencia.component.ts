import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-experiencia',
  templateUrl: './edicion-experiencia.component.html',
  styleUrls: ['./edicion-experiencia.component.css']
})
export class EdicionExperienciaComponent implements OnInit {

  @Input() thisExp: any;
  @Output() modEvent = new EventEmitter();
  thisSelected: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
  }

  onClickDelete() {
    this.datosPortfolio.borrarDatosExperiencias(this.thisExp.id)
      .subscribe(data => {
        this.refreshList();
      })
  }

  onClickUpdate() {
    this.datosPortfolio.buscarDatosExperiencia(this.thisExp.id)
      .subscribe(data => {
        //console.log(JSON.stringify(data))
        this.thisSelected = data;
      })
  }

  refreshList() {
    this.modEvent.emit();
  }

}
