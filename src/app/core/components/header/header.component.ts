import { Component, OnInit } from '@angular/core';
import { IMenu, MenuService } from 'src/app/helpers/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listMenu:IMenu[]
  constructor(private menuService:MenuService) { 
    this.listMenu=this.menuService.getMenu();
  }

  ngOnInit(): void {
  }

}
