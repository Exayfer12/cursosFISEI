import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { PageFormComponent } from './pages/page-form/page-form.component';
import { CrearRoutingModule } from './crear-routing.module';

@NgModule({
  declarations: [
    FormComponent,
    PageFormComponent
  ],
  imports: [
    CommonModule,
    CrearRoutingModule
  ],

})
export class CrearModule { }
