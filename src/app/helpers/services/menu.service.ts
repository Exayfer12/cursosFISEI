import { Injectable } from '@angular/core';

export interface IMenu{
  title:string
  url:string

}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    private listMenu: IMenu[]=[
      {title:'Inicio',url:'/inicio'},
      {title:'Cursos',url:'/cursos'},
    ]
    constructor() { }
  
    getMenu(): IMenu[]{
      return [...this.listMenu]
    }
  
    getMenuByUrl(url:string):IMenu{
      return this.listMenu.find(
        (menu)=> menu.url.toLowerCase() ===url.toLowerCase()
      ) as IMenu
    }
  }
