import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-usuario',
  standalone: false,
  templateUrl: './new-usuario.component.html',
  styleUrl: './new-usuario.component.css'
})
export class NewUsuarioComponent {
  formulario: FormGroup;
  formularioEnviado: boolean = false;

  usuariosService = inject(UsuariosService);
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      peso: new FormControl(),
      edad: new FormControl(),
      altura: new FormControl()
    });
  }

  async onSubmit() {
    const response = await this.usuariosService.create(this.formulario.value);
    console.log(response);

    this.formularioEnviado = true;

    // Guardamos los datos temporalmente en localStorage
    localStorage.setItem('perfilUsuario', JSON.stringify(this.formulario.value));
  }

  irAPerfil() {
    this.router.navigate(['/components/informacion/usuario']);
  }
}
