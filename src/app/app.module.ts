import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/header/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursoItemComponent } from './components/curso-item/curso-item.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoItemComponent } from './components/carrito-item/carrito-item.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CursosComponent,
    ListaCursosComponent,
    CursoItemComponent,
    CarritoComponent,
    CarritoItemComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
