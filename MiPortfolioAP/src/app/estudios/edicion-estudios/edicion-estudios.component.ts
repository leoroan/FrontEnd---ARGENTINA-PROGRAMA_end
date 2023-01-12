import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-estudios',
  templateUrl: './edicion-estudios.component.html',
  styleUrls: ['./edicion-estudios.component.css']
})
export class EdicionEstudiosComponent implements OnInit {

  @Input() thisEdu: any;
  @Output() modEvent = new EventEmitter();
  thisSelected: any;


  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  }

  onClickDelete(){
    this.datosPortfolio.borrarDatosEducacion(this.thisEdu.id)
      .subscribe(data =>{       
        //location.reload();
        this.refreshList();
    })
  }

  onClickUpdate() {
    this.datosPortfolio.buscarDatosEducacion(this.thisEdu.id)
      .subscribe(data => {
      //console.log(JSON.stringify(data))
      this.thisSelected = data;    
      })
  }

  refreshList() {
    this.modEvent.emit();
  }




}
