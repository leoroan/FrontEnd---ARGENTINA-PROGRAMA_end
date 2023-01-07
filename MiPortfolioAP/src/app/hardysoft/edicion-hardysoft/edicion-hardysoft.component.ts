import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-hardysoft',
  templateUrl: './edicion-hardysoft.component.html',
  styleUrls: ['./edicion-hardysoft.component.css']
})
export class EdicionHardysoftComponent implements OnInit {

  @Input() thisHab: any;
  @Output() deleteEvent = new EventEmitter();

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  }

  onClickDelete(){
    this.datosPortfolio.borrarDatosHabilidades(this.thisHab)
      .subscribe(data =>{       
        console.log("Deleted id: "+this.thisHab);
        location.reload();
        //this.deleteEvent.emit();
    })
  }

}
