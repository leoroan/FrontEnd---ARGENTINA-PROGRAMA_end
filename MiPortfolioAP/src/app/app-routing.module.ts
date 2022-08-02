import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercadeComponent } from './acercade/acercade.component';

const routes: Routes = [
  { path: '', redirectTo: '/acercade', pathMatch: 'full' },
  { path: 'acercade', component: AcercadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
