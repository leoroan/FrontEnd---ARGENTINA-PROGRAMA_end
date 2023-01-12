import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-crear-nuevo-proyecto',
  templateUrl: './edicion-crear-nuevo-proyecto.component.html',
  styleUrls: ['./edicion-crear-nuevo-proyecto.component.css']
})
export class EdicionCrearNuevoProyectoComponent implements OnInit {

  someInput: any;
  formdata: any;
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  @Output() createEvent = new EventEmitter();

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      url_foto: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.pattern(this.urlRegex)]),
      url_proyecto: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(250)])
    });

  }

  onClickSubmit(datos: any) {
    this.datosPortfolio.agregarActualizarDatosProyectos(datos)
      .subscribe(data => {
        console.log(JSON.stringify(datos));
        this.createEvent.emit();
      })
    this.formdata.reset();
  }
}
