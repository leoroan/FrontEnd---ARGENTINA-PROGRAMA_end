import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-crear-nuevo',
  templateUrl: './edicion-crear-nuevo.component.html',
  styleUrls: ['./edicion-crear-nuevo.component.css']
})

export class EdicionCrearNuevoComponent implements OnInit {

  someInput: any;
  formdata: any;
  @Output() createEvent = new EventEmitter();

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {

    this.formdata = new FormGroup({
      titulo_puesto: new FormControl( '', [ Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      periodo_Trabajado: new FormControl('desde dd/mm/aaaa hasta dd/mm/aaaa', Validators.required),
      logo_url: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(250)]),
    });

  }

  onClickSubmit(datos: any) {
    this.datosPortfolio.agregarActualizarDatosExperiencias(datos)
      .subscribe(data => {
        console.log(JSON.stringify(datos));
        this.createEvent.emit();
      })
    this.formdata.reset();
  }

  





}
