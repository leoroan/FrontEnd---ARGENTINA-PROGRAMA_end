import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lean :: Mi Portfolio Personal!';

  // este es el estado que resuelve o devuelve cuando esta loggeado
  isLoggedIn = true;

  onActivate(componentReference: any) {
    if (this.isLoggedIn) {
      componentReference.setLoggIn();
    }
    else {
      componentReference.setLoggOut();
    }
  }

}
