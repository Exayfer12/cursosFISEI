import { NgModule } from '@angular/core';
//correguir import
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //correguir import
  exports: [RouterModule]
})
export class AppRoutingModule { }
