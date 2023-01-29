import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,

    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[

    HeaderComponent
  ]
})
export class CoreModule { }
