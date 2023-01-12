import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-update-habilidades',
  templateUrl: './update-habilidades.component.html',
  styleUrls: ['./update-habilidades.component.css']
})
export class UpdateHabilidadesComponent implements OnInit {

  @Input() thisHab: any;
  @Output() modEvent = new EventEmitter();
  formdata: any;

  constructor(private datosPortfolio: PortfolioService) {
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      nombre_habilidad: new FormControl(this.thisHab.nombre_habilidad, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      porcentaje: new FormControl(this.thisHab.porcentaje, [Validators.required, Validators.min(0), Validators.max(100)]),
      priodo: new FormControl(this.thisHab.priodo, Validators.required),
      descripcion: new FormControl(this.thisHab.descripcion, [Validators.required, Validators.maxLength(250)]),
      id: new FormControl(this.thisHab.id)
    });

  }

  onClickSubmit(datos: any) {
    this.datosPortfolio.agregarActualizarDatosHabilidades(datos)
      .subscribe(data => {
        this.modEvent.emit();
      })
    this.formdata.reset();
  }

}
