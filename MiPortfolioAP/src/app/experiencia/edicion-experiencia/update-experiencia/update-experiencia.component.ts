import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-update-experiencia',
  templateUrl: './update-experiencia.component.html',
  styleUrls: ['./update-experiencia.component.css']
})
export class UpdateExperienciaComponent implements OnInit {

  @Input() thisExp: any;
  @Output() modEvent = new EventEmitter();
  formdata: any;

  constructor(private datosPortfolio: PortfolioService) {
  }

  ngOnInit(): void {

    this.formdata = new FormGroup({
      titulo_puesto: new FormControl(this.thisExp.titulo_puesto, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      periodo_Trabajado: new FormControl(this.thisExp.periodo_Trabajado, Validators.required),
      logo_url: new FormControl(this.thisExp.logo_url, [Validators.required, Validators.maxLength(250)]),
      descripcion: new FormControl(this.thisExp.descripcion, [Validators.required, Validators.maxLength(250)]),
      id: new FormControl(this.thisExp.id)
    });

  }


  onClickSubmit(datos: any) {
    this.datosPortfolio.agregarActualizarDatosExperiencias(datos)
      .subscribe(data => {
        this.modEvent.emit();
      })
    this.formdata.reset();
  }

}
