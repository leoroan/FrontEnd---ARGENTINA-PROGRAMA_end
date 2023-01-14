import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edicion-editar-persona',
  templateUrl: './edicion-editar-persona.component.html',
  styleUrls: ['./edicion-editar-persona.component.css']
})
export class EdicionEditarPersonaComponent implements OnInit {

  @Input() thisPer: any;
  someInput: any;
  formdata: any;
  mailRegex = /@.*[a-zA-Z]+/;
  urlRegex = /w+\..*\.[A-Za-z0-9]+/ism;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      nombre: new FormControl( this.thisPer.nombre, [ Validators.required, Validators.minLength(3), Validators.maxLength(75)]),
      apellido: new FormControl(this.thisPer.apellido, [Validators.required, Validators.minLength(3), Validators.maxLength(75)]),
      email: new FormControl( this.thisPer.email, [Validators.required, Validators.pattern(this.mailRegex)]),
      fecha_nac: new FormControl(this.thisPer.fecha_nac, [Validators.required, Validators.maxLength(10)]),
      titulo_actual: new FormControl(this.thisPer.titulo_actual, [Validators.required, Validators.maxLength(250)]),
      sobre_mi: new FormControl(this.thisPer.sobre_mi, [Validators.required, Validators.maxLength(250)]),
      contrasenia: new FormControl(this.thisPer.contrasenia, [Validators.required, Validators.maxLength(25)]),
      linkedin: new FormControl(this.thisPer.linkedin, [Validators.required, Validators.maxLength(250), Validators.pattern(this.urlRegex)]),
      facebook: new FormControl(this.thisPer.facebook, [Validators.required, Validators.maxLength(250),Validators.pattern(this.urlRegex)]),
      github: new FormControl(this.thisPer.github, [Validators.required, Validators.maxLength(250), Validators.pattern(this.urlRegex)]),
      id: new FormControl(this.thisPer.id, Validators.required)

    });

  }

  onClickSubmit(datos: any) {
    this.datosPortfolio.actualizarDatosPersona(datos)
      .subscribe(data => {
        location.reload();
      })
    this.formdata.reset();
  }

}
