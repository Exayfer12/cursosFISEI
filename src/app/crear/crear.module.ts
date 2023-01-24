import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-form/page-list.component';
import { FormComponent } from './components/form/form.component';
import { PageFormComponent } from './pages/page-form/page-form.component';



@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
    PageFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PageListComponent
  ]
})
export class CrearModule { }
