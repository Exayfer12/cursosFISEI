import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  data:any[] = [
    {cedula:'12', nombre:'Jorge', apellido:'Delgado'},
    {cedula:'22', nombre:'Karla', apellido:'Martínez'},
    {cedula:'32', nombre:'Mishell', apellido:'Castillo'},
    {cedula:'42', nombre:'Andrés', apellido:'Jiménez'},
    {cedula:'52', nombre:'Alejandro', apellido:'Pazmiño'},
  ]

  ListFields: string[] = ['CEDULA','NOMBRE']

  constructor() { }

  ngOnInit(): void {
  }


}
