import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atencion-cliente',
  templateUrl: './atencion-cliente.component.html',
  standalone: false,
  styleUrls: ['./atencion-cliente.component.css']
})
export class AtencionClienteComponent {
  exito = false;
  email = '';
  confirmarEmail = '';
  mensajeTexto = '';

  constructor(private http: HttpClient) {}

  get mensajeInvalido(): boolean {
    const palabras = this.mensajeTexto.trim().split(/\s+/);
    return palabras.length < 10;
  }

  enviarFormulario(formulario: NgForm) {
    if (this.email !== this.confirmarEmail) {
      return;
    }

    const palabras = this.mensajeTexto.trim().split(/\s+/);
    if (palabras.length < 10) {
      return;
    }

    const datosFormulario = {
      ...formulario.value,
      mensaje: this.mensajeTexto
    };

    this.http.post('https://eco-clima21.com/api/contacto', datosFormulario).subscribe({
  next: () => {
    this.exito = true;
    setTimeout(() => this.exito = false, 3000);
    formulario.resetForm();
    this.email = '';
    this.confirmarEmail = '';
    this.mensajeTexto = '';
  },
  error: err => console.error('Error al enviar formulario', err)
});

  }

  soloNumeros(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
}
