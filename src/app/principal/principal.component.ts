import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  data:any[] = [
    {cedula:'12', nombre:'Jorge', apellido:'Delgado', cargo:'Gerente',correo: 'jorge@gmail.com'},
    {cedula:'22', nombre:'Karla', apellido:'Martínez', cargo:'Contador',correo: 'karla@gmail.com'},
    {cedula:'32', nombre:'Mishell', apellido:'Villegas', cargo:'Contador',correo: 'mishell@gmail.com'},
    {cedula:'42', nombre:'Monserrath', apellido:'Olaya', cargo:'Gerente',correo: 'monse@gmail.com'},
    {cedula:'52', nombre:'Alejandro', apellido:'Pazmiño', cargo:'Gerente',correo: 'alejandro@gmail.com'},
  ]

  ListFields: string[] = ['cedula','nombre','apellido','cargo','correo']

  constructor() { }

  ngOnInit(): void {
  }

  

}
