import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-hardysoft',
  templateUrl: './edicion-hardysoft.component.html',
  styleUrls: ['./edicion-hardysoft.component.css']
})
export class EdicionHardysoftComponent implements OnInit {

  @Input() thisHab: any;
  @Output() modEvent = new EventEmitter();
  thisSelected: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
  }

  onClickDelete() {
    this.datosPortfolio.borrarDatosHabilidades(this.thisHab.id)
      .subscribe(data => {
        this.refreshList();
      })
  }

  onClickUpdate() {
    this.datosPortfolio.buscarDatosHabilidad(this.thisHab.id)
      .subscribe(data => {
        this.thisSelected = data;
      })
  }

  refreshList() {
    this.modEvent.emit();
  }

}
