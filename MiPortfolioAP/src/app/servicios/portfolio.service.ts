import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // url de mi bbdd
  url_ver: String="http://localhost:8080/ver/";

  constructor( private http:HttpClient) { }

  obtenerDatosPersona():Observable<any>{
    return this.http.get<any>(this.url_ver+"persona");
  }

  obtenerDatosExperiencias():Observable<any>{
    return this.http.get<any>(this.url_ver+"experiencias");
  }

  obtenerDatosHabilidades():Observable<any>{
    return this.http.get<any>(this.url_ver+"habilidad");
  }

  obtenerDatosEducacion():Observable<any>{
    return this.http.get<any>(this.url_ver+"educacion");
  }

  obtenerDatosProyectos():Observable<any>{
    return this.http.get<any>(this.url_ver+"proyecto");
  }

}
