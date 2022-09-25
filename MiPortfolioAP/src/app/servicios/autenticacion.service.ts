import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url_api = "www.unaurl.com"
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse
      (sessionStorage.getItem('currentUser') || "{}"))
  }

  iniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url_api, credenciales).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }

  get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}
