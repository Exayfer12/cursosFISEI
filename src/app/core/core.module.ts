import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
=======
import { HeaderComponent } from './components/header/header.component';

import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';
>>>>>>> origin/PCF-9-Módulo-de-gestión-de-cursos/eventos



@NgModule({
  declarations: [
<<<<<<< HEAD
    LoginComponent,
    PageLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PageLoginComponent
=======
    HeaderComponent,

    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[

    HeaderComponent
>>>>>>> origin/PCF-9-Módulo-de-gestión-de-cursos/eventos
  ]
})
export class CoreModule { }
