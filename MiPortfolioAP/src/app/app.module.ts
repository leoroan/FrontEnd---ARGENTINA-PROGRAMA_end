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
import { EdicionEstudiosComponent } from './estudios/edicion-estudios/edicion-estudios.component';
import { EdicionHardysoftComponent } from './hardysoft/edicion-hardysoft/edicion-hardysoft.component';
import { EdicionProyectosComponent } from './proyectos/edicion-proyectos/edicion-proyectos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './servicios/interceptor.service';

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
    EdicionExperienciaComponent,
    EdicionEstudiosComponent,
    EdicionHardysoftComponent,
    EdicionProyectosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService,{
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
