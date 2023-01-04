import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercadeComponent } from './acercade/acercade.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HardysoftComponent } from './hardysoft/hardysoft.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  { path: '', redirectTo: 'acercade', pathMatch: 'full' },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'hardysoft', component: HardysoftComponent },
  { path: 'proyectos', component: ProyectosComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
