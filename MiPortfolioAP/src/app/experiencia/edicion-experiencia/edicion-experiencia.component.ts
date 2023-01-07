import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-experiencia',
  templateUrl: './edicion-experiencia.component.html',
  styleUrls: ['./edicion-experiencia.component.css']
})
export class EdicionExperienciaComponent implements OnInit {

  @Input() thisExp: any;
  @Output() deleteEvent = new EventEmitter();
  
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {    
  }

  onClickDelete(){
    this.datosPortfolio.borrarDatosExperiencias(this.thisExp)
      .subscribe(data =>{       
        console.log("Deleted id: "+this.thisExp );
        //location.reload();
        this.deleteEvent.emit();
    })
  }

}
