import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import {Router, RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { NgFor } from '@angular/common';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  usuarios: Array<Usuario>=[];
  constructor(private routerPath: Router, private usuariosService:UsuariosService) {

  }

    ngOnInit(): void {
      this.obtenerUsuarios();
    }

    obtenerUsuarios(){
      this.usuariosService.obtenerUsuarios().subscribe(vs =>{
        this.usuarios=vs;
        console.log(this.usuarios)
      })
    }

    onEditarNavigate(id:number) {
      this.routerPath.navigate([`/usuarios/editar/${id}`]);
    }

}
