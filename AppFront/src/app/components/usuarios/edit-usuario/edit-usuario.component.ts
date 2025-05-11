import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-edit-usuario',
  standalone: false,
  
  templateUrl: './edit-usuario.component.html',
  styleUrl: './edit-usuario.component.css'
})
export class EditUsuarioComponent {

  formulario: FormGroup;

  usuarioId = signal('');

  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);

  constructor() {
    this.formulario = new FormGroup({
      nombre:  new FormControl(),
      apellido: new FormControl(),
      peso: new FormControl(),
      edad: new FormControl(),
      altura: new FormControl()
    });
  }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const usuarioId = params['usuarioId'];
      this.usuarioId.set(usuarioId);
      const usuario = await this.usuariosService.getById(usuarioId);

      // Rellenar form
      delete usuario._id;
      delete usuario.__v;
      this.formulario.setValue(usuario);

    });
  }

  async onSubmit() {
    const response = await this.usuariosService.update(this.usuarioId(), this.
    formulario.value);

    console.log(response);

  }

}
