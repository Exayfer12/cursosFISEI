import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http:HttpClient) {
    
   }
   LoginUserService(CI:string,Contrasenia:string):Observable<any>{
    return this.http.get(`${environment.API_URL}/IniciarSesionParticipante?CI=${CI}&Contrasenia=${Contrasenia}`)
  }
}
