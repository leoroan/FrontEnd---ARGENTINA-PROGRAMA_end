import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-editar-persona',
  templateUrl: './edicion-editar-persona.component.html',
  styleUrls: ['./edicion-editar-persona.component.css']
})
export class EdicionEditarPersonaComponent implements OnInit {

  someInput: any;
  formdata: any;
  mailRegex = /@.*[a-zA-Z]+/;
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  @Output() createEvent = new EventEmitter();

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      nombre: new FormControl( '', [ Validators.required, Validators.minLength(10), Validators.maxLength(75)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(75)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.mailRegex)]),
      fecha_nac: new FormControl('dd/mm/aaaa', [Validators.required, Validators.maxLength(10)]),
      titulo_actual: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      sobre_mi: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      contrasenia: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      linkedin: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.pattern(this.urlRegex)]),
      facebook: new FormControl('', [Validators.required, Validators.maxLength(250),Validators.pattern(this.urlRegex)]),
      github: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.pattern(this.urlRegex)]),
    });

  }

  onClickSubmit(datos: any) {
    this.datosPortfolio.actualizarDatosPersona(datos)
      .subscribe(data => {
        console.log(JSON.stringify(datos));
        this.createEvent.emit();
      })
    this.formdata.reset();
  }

}
