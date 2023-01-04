import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // url de mi bbdd
  url: String="http://localhost:8080/ver/";

  constructor( private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get<any>(this.url+"persona");
  }

}
