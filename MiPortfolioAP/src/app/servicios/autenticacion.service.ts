import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PortfolioService } from './portfolio.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url_api = "http://localhost:8080/ver/autorizaciones"
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient, private datosPortfolio: PortfolioService) {
    //localStorage.removeItem("token");
    console.log("El servicio de autenticacion está corriendo")
    this.currentUserSubject = new BehaviorSubject(JSON.parse
      (sessionStorage.getItem('mi-super-secret-token-del-server') || '{}'))

    //console.log("esta loggeado? " + this.isUserLoggedIn())
    //console.log("session storage? " + sessionStorage.length)
  }

  iniciarSesion(credenciales: any) {
    this.datosPortfolio.obtenerAutorizaciones().subscribe (res => {
      const user = res.find((a: any) => {
        return a.user === credenciales.user && a.password === credenciales.password
      });
      if (user) {
        localStorage.setItem("token", "mi-super-secret-token-del-server");
        alert('Login Succesful');        
        return (new HttpResponse({ status: 200 }));

      } else {
        alert("user not found");
        return (new HttpResponse({ status: 401 }));
      }
    })
  }


  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem("token") != null) {
      //console.log(sessionStorage.getItem('token'))
      return true;
    }
    return false;
  }

  logout(): boolean {
    localStorage.removeItem("token");
    return true;
  }

}

