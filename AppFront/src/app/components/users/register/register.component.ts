import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formulario: FormGroup;

  usersService = inject(UsersService);
  router = inject(Router); // ✅ Agregado aquí

  constructor() {
    this.formulario = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit() {
    const email = this.formulario.get('email')?.value;
  
    if (!email.endsWith('@fitnesspro.com')) {
      alert('El correo debe terminar en @fitnesspro.com');
      return;
    }
  
    const response = await this.usersService.register(this.formulario.value);
  
    if (!response.error) {
      this.router.navigate(['/login']);
    } else {
      alert('Error al registrar: ' + response.error);
    }
  }
}
