import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-update-proyectos',
  templateUrl: './update-proyectos.component.html',
  styleUrls: ['./update-proyectos.component.css']
})
export class UpdateProyectosComponent implements OnInit {

  @Input() thisProy: any;
  @Output() modEvent = new EventEmitter();
  formdata: any;
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  constructor(private datosPortfolio: PortfolioService) {
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      nombre: new FormControl(this.thisProy.nombre, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      url_foto: new FormControl(this.thisProy.url_foto, [Validators.required, Validators.maxLength(250), Validators.pattern(this.urlRegex)]),
      url_proyecto: new FormControl(this.thisProy.url_proyecto, [Validators.required, Validators.maxLength(250)]),
      descripcion: new FormControl(this.thisProy.descripcion, [Validators.required, Validators.maxLength(250)]),
      id: new FormControl(this.thisProy.id)
    });
  }

  onClickSubmit(datos: any) {
    this.datosPortfolio.agregarActualizarDatosProyectos(datos)
      .subscribe(data => {
        this.modEvent.emit();
      })
    this.formdata.reset();
  }

}
