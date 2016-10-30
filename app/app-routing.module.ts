import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetallePersonaComponent } from './componentes/detalle-persona/detalle-persona.component';
import { PersonasComponent }     from './componentes/personas/personas.component';
import { DosComponentesComponent } from './componentes/dos-componentes/dos-componentes.component';
import { DosServiciosComponent } from './componentes/dos-servicios/dos-servicios.component';
import { PadreComponent }     from './componentes/padre-hijo/padre.component';
import { DashboardComponent }     from './componentes/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detalle/:id', component: DetallePersonaComponent },
  { path: 'personas',     component: PersonasComponent },
  { path: 'componentes',     component: DosComponentesComponent },
  { path: 'servicios',     component: DosServiciosComponent },
  { path: 'padre-hijo',     component: PadreComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
