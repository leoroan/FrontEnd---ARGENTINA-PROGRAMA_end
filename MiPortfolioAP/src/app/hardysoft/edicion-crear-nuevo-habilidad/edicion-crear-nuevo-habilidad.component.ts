import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-crear-nuevo-habilidad',
  templateUrl: './edicion-crear-nuevo-habilidad.component.html',
  styleUrls: ['./edicion-crear-nuevo-habilidad.component.css']
})
export class EdicionCrearNuevoHabilidadComponent implements OnInit {

  someInput: any;
  formdata: any;
  @Output() createEvent = new EventEmitter();

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      nombre_habilidad: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      porcentaje: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      priodo: new FormControl('mm/aaaa', Validators.required),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(250)])
    });

  }

  onClickSubmit(datos: any) {
    this.datosPortfolio.agregarActualizarDatosHabilidades(datos)
      .subscribe(data => {
        console.log(JSON.stringify(datos));
        this.createEvent.emit();
      })
    this.formdata.reset();
  }

}
