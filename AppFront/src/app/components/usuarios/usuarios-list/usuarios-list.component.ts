import { Component, inject, signal } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  standalone: false,
  styleUrl: './usuarios-list.component.css'
})
export class UsuariosListComponent {

  arrUsuarios = signal<any[]>([]);

  usuariosService = inject(UsuariosService);

  async ngOnInit() {
    const usuarios = await this.usuariosService.getAll();
    this.arrUsuarios.set(usuarios);
  }
  usuarioSeleccionado: any = null;

  mostrarDetalles(usuario: any) {
    // Alternar entre mostrar y ocultar los detalles con una animación suave
    this.usuarioSeleccionado = this.usuarioSeleccionado === usuario ? null : usuario;

    // Desplazamiento suave al usuario seleccionado
    setTimeout(() => {
      document.getElementById(`usuario-${usuario._id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); 
  }

  async onClickBorrar(usuarioId: string) {
    const usuario = await this.usuariosService.deleteById(usuarioId);
    console.log(usuario);

    if(!usuario.error) {
      const usuarios = await this.usuariosService.getAll();
      this.arrUsuarios.set(usuarios);
    } else {
      console.log(usuario.error);
    }

  }


}
