import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conferencistas',
  templateUrl: './conferencistas.component.html',
  styleUrls: ['./conferencistas.component.css']
})
export class ConferencistasComponent implements OnInit {
  rol = 'admin';

  data:any[] = [
    {nombre:'Conferencia 1', horas:'32', modalidad:'Presencial', descripcion:'Conferencia número 1', imagen:'https://img-c.udemycdn.com/course/480x270/980450_7fc0_4.jpg'},
    {nombre:'Conferencia 2', horas:'32', modalidad:'Presencial', descripcion:'Conferencia número 2', imagen:'https://img-c.udemycdn.com/course/480x270/980450_7fc0_4.jpg'},
    {nombre:'Curso 1', horas:'30', modalidad:'Virtual', descripcion:'Curso número 1', imagen:'https://img-c.udemycdn.com/course/480x270/980450_7fc0_4.jpg'},
    {nombre:'Curso 2', horas:'20', modalidad:'Presencial', descripcion:'Curso número 2', imagen:'https://img-c.udemycdn.com/course/480x270/980450_7fc0_4.jpg'},
    {nombre:'Curso 3', horas:'40', modalidad:'Virtual', descripcion:'Curso número 3', imagen:'https://img-c.udemycdn.com/course/480x270/980450_7fc0_4.jpg'},
    {nombre:'Conferencia 3', horas:'32', modalidad:'Presencial', descripcion:'Conferencia número 3', imagen:'https://img-c.udemycdn.com/course/480x270/980450_7fc0_4.jpg'},
    {nombre:'Conferencia 4', horas:'12', modalidad:'Virtual', descripcion:'Conferencia número 4', imagen:'https://img-c.udemycdn.com/course/480x270/980450_7fc0_4.jpg'},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
