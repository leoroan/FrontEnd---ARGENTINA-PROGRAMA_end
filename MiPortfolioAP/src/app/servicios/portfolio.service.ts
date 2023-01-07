import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // url de mi bbdd
  url_ver: String="http://localhost:8080/ver/";
  url_borrar: String="http://localhost:8080/borrar/";

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

  borrarDatosExperiencias(id: number):Observable<number>{
    //console.log("borrado id:"+id);
    //console.log(this.url_borrar+"experiencia/"+id);
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete<number>(this.url_borrar+"experiencia/"+id);
  }

}
