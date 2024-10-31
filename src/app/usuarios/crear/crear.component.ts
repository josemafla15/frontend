import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Usuario } from "../usuario";
import { UsuariosService } from "../usuarios.service";
import { CommonModule } from "@angular/common";
import { UsuariosModule } from "../usuarios.module";


@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})

export class CrearComponent implements OnInit{
  usuarioForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private usuarioService:UsuariosService) {}
  
    ngOnInit()  {

      this.usuarioForm = this.formBuilder.group({
        nombre : ['', [Validators.required, Validators.minLength(1)]],
        contrasena: ['', [Validators.required, Validators.minLength(1)]],
        fechaNacimiento: ['', [Validators.required, Validators.minLength(1)]],
        email: ['', [Validators.required, Validators.minLength(1)]],
        paisOrigen: ['', [Validators.required, Validators.minLength(1)]],
      });
    }

    crearUsuario(usuario: Usuario): void {
      this.usuarioService.crearUsuario(usuario).subscribe(
        (usuarioCreado) => {
          alert('usuario creado con éxito')
          this.usuarioForm.reset();
        },
      );

    }
}
