import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-detail-usuario',
  templateUrl: './detail-usuario.component.html',
  standalone: false,
  styleUrl: './detail-usuario.component.css'
})
export class DetailUsuarioComponent {

  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);

  usuario = signal<any>({});  

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const usuario = await this.usuariosService.getById(params['usuarioId']);
      this.usuario.set(usuario);
    });
  }
}