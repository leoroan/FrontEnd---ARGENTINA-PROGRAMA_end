import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { HardysoftComponent } from './hardysoft/hardysoft.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EdicionExperienciaComponent } from './experiencia/edicion-experiencia/edicion-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HardysoftComponent,
    ProyectosComponent,
    EdicionExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
