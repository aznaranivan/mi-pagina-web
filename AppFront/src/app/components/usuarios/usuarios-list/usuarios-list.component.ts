import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  imports: [],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.css'
})
export class UsuariosListComponent {

  usuariosService = inject(UsuariosService);

  async ngOnInit() {
    const usuarios = await this.usuariosService.getAll();

    console.log(usuarios);
  }

}
