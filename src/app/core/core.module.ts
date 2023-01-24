import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PageListComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PageListComponent
  ]
})
export class CoreModule { }
