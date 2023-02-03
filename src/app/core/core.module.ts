import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PageLoginComponent } from './page/page-login/page-login.component';



@NgModule({
  declarations: [
    LoginComponent,
    PageLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PageLoginComponent
  ]
})
export class CoreModule { }
