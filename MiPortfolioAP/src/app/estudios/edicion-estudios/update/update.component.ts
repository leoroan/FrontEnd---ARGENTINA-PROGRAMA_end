import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() thisEdu: any;
  @Output() modEvent = new EventEmitter();
  formdata: any;

  constructor(private datosPortfolio: PortfolioService) {
  }

  ngOnInit(): void {

    this.formdata = new FormGroup({
      nombre_instituto: new FormControl(this.thisEdu.nombre_instituto, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      titulo: new FormControl(this.thisEdu.titulo, Validators.required),
      url_logo: new FormControl(this.thisEdu.url_logo, [Validators.required, Validators.maxLength(250)]),
      fecha_inicio: new FormControl(this.thisEdu.fecha_inicio, [Validators.required, Validators.maxLength(10)]),
      fecha_fin: new FormControl(this.thisEdu.fecha_fin, [Validators.maxLength(10)]),
      id: new FormControl(this.thisEdu.id)
    });

  }


  onClickSubmit(datos: any) {
    //console.log("submot: " + JSON.stringify(datos));
    this.datosPortfolio.agregarActualizarDatosEducacion(datos)
      .subscribe(data => {
        //console.log(JSON.stringify(datos));
        this.modEvent.emit();
      })
    this.formdata.reset();
  }

}
