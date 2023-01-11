import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // url de mi bbdd
  url_ver: String = "http://localhost:8080/ver/";
  url_borrar: String = "http://localhost:8080/borrar/";
  url_nueva_update: String = "http://localhost:8080/nueva/";
  url_buscar: String = "http://localhost:8080/buscar/";

  constructor(private http: HttpClient) { }

  obtenerDatosPersona(): Observable<any> {
    return this.http.get<any>(this.url_ver + "persona");
  }

  actualizarDatosPersona(dat: any): Observable<any> {
    return this.http.post<any>(this.url_nueva_update + "persona", dat);
  }

  obtenerDatosExperiencias(): Observable<any> {
    return this.http.get<any>(this.url_ver + "experiencias");
  }

  obtenerDatosHabilidades(): Observable<any> {
    return this.http.get<any>(this.url_ver + "habilidad");
  }

  obtenerDatosEducacion(): Observable<any> {
    return this.http.get<any>(this.url_ver + "educacion");
  }

  obtenerDatosProyectos(): Observable<any> {
    return this.http.get<any>(this.url_ver + "proyecto");
  }

  borrarDatosExperiencias(id: number): Observable<number> {
    //console.log("borrado id:"+id);
    //console.log(this.url_borrar+"experiencia/"+id);
    let httpheaders = new HttpHeaders()
      .set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders
    };
    return this.http.delete<number>(this.url_borrar + "experiencia/" + id);
  }

  borrarDatosHabilidades(id: number): Observable<number> {
    return this.http.delete<number>(this.url_borrar + "habilidad/" + id);
  }

  borrarDatosEducacion(id: number): Observable<number> {
    return this.http.delete<number>(this.url_borrar + "educacion/" + id);
  }

  borrarDatosProyectos(id: number): Observable<number> {
    return this.http.delete<number>(this.url_borrar + "proyecto/" + id);
  }

  agregarActualizarDatosExperiencias(dat: any): Observable<any> {
    return this.http.post<any>(this.url_nueva_update + "experiencias", dat);
  }

  agregarActualizarDatosHabilidades(dat: any): Observable<any> {
    return this.http.post<any>(this.url_nueva_update + "habilidad", dat);
  }

  agregarActualizarDatosEducacion(dat: any): Observable<any> {
    return this.http.post<any>(this.url_nueva_update + "educacion", dat);
  }

  agregarActualizarDatosProyectos(dat: any): Observable<any> {
    return this.http.post<any>(this.url_nueva_update + "proyecto", dat);
  }

  buscarDatosEducacion(id: number): Observable<number> {
    return this.http.get<number>(this.url_buscar + "educacion/" + id);
  }
}
