import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario'; 

const API_URL = 'http://127.1.0.1.8000/api/usuario/list'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  obtenerUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://127.0.0.1:8000/api/usuario/list');
  }

  crearUsuario(vehiculo:Usuario):Observable<Usuario>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Datos enviados:', Usuario);
    return this.http.post<Usuario>('http://127.0.0.1:8000/api/usuario/crear-usuario', Usuario, {headers})  
  }

}
