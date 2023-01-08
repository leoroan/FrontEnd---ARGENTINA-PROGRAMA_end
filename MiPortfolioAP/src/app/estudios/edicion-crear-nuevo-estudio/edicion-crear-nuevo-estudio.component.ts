import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-edicion-crear-nuevo-estudio',
  templateUrl: './edicion-crear-nuevo-estudio.component.html',
  styleUrls: ['./edicion-crear-nuevo-estudio.component.css']
})
export class EdicionCrearNuevoEstudioComponent implements OnInit {

  someInput: any;
  formdata: any;
  @Output() createEvent = new EventEmitter();

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {

    this.formdata = new FormGroup({
      nombre_instituto: new FormControl( '', [ Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      titulo: new FormControl('', Validators.required),
      url_logo: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      fecha_inicio: new FormControl('dd/mm/aaaa', [Validators.required, Validators.maxLength(10)]),
      fecha_fin: new FormControl('dd/mm/aaaa', [Validators.maxLength(10)]),
    });

  }

  onClickSubmit(datos: any) {
    this.datosPortfolio.agregarActualizarDatosEducacion(datos)
      .subscribe(data => {
        console.log(JSON.stringify(datos));
        this.createEvent.emit();
      })
    this.formdata.reset();
  }

}
