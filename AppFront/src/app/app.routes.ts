import { Routes } from '@angular/router';
import { UsuariosListComponent } from './components/usuarios/usuarios-list/usuarios-list.component';
import { DetailUsuarioComponent } from './components/usuarios/detail-usuario/detail-usuario.component';

export const routes: Routes = [
    { path: 'usuarios', component: UsuariosListComponent },
    { path: 'usuarios/:usuarioId', component: DetailUsuarioComponent }
];

