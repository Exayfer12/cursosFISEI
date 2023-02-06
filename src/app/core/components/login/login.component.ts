import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../../services/login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //LoginUser:LoginUserService="";
  constructor(private router:Router) { 

    
  }

  ngOnInit(): void {
    
  }

  logCI:string='';
  logPass:string='';
  
  ingresar(){
    console.log(this.logCI);
    console.log(this.logPass);
    this.router.navigate(['/principal'])
    //let a=this.loginUser.LoginUserService(this.logCI,this.logPass)
    //console.log(a);
  }
}
