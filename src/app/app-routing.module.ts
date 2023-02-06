import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { ConferencistasComponent } from './conferencistas/conferencistas.component';
import { LoginComponent } from './core/components/login/login.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'principal',component:PrincipalComponent},
  {path:'asistencia',component:AsistenciaComponent},
  {path:'conferencistas',component:ConferencistasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
