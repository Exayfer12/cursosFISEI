import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  mis_cursos=[
    {id:1,title:'Evento1',Descripcion:'Descripcion'},
    {id:2,title:'Evento2',Descripcion:'Descripcion'},
    {id:3,title:'Evento3',Descripcion:'Descripcion'},
  ]
}
