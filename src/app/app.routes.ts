import { Routes } from '@angular/router';
import { ListarComponent } from './usuarios/listar/listar.component';
import { CrearComponent } from './usuarios/crear/crear.component';


export const routes: Routes = [{
    path:'',
        component:ListarComponent
},
{
    path: 'newusuario',
    component:CrearComponent
},
];
