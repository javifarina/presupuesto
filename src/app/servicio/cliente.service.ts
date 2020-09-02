import { cliente } from './../model/cliente';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  cliente:cliente[]
  myAppUrl   = 'http://localhost:8180'
  myApiUrl   = '/api/clientes/'
  
    
  constructor(private http:HttpClient) {}


   getClientes(): Observable<cliente[]>{
    return this.http.get<cliente[]>(this.myAppUrl+this.myApiUrl);
   }
}