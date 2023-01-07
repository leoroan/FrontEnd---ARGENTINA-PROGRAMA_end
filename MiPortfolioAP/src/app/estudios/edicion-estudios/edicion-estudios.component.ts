import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-estudios',
  templateUrl: './edicion-estudios.component.html',
  styleUrls: ['./edicion-estudios.component.css']
})
export class EdicionEstudiosComponent implements OnInit {

  @Input() thisEdu: any;
  @Output() deleteEvent = new EventEmitter();
  
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  }

  onClickDelete(){
    this.datosPortfolio.borrarDatosEducacion(this.thisEdu)
      .subscribe(data =>{       
        console.log("Deleted id: "+this.thisEdu);
        //location.reload();
        this.deleteEvent.emit();
    })
  }

}
