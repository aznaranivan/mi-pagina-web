import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  standalone: false,
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent {

  loading = false;

  gifSeleccionado: 'plato' | 'gym' | 'uptime' | null = null;

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/components/informacion/usuario']);
  }

  irADietas() {
  this.loading = true;
  this.gifSeleccionado = 'plato';
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    this.loading = false;
    this.gifSeleccionado = null;
    document.body.style.overflow = '';
    this.router.navigate(['/components/dietas']);
  }, 3000);
}

irAEjercicios() {
  this.loading = true;
  this.gifSeleccionado = 'gym';

  setTimeout(() => {
    this.loading = false;
    this.gifSeleccionado = null;
    this.router.navigate(['/components/alta/ejercicios']);
  }, 2000);
}



irAHabitos() {
  this.loading = true;
  this.gifSeleccionado = 'uptime';
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    this.loading = false;
    this.gifSeleccionado = null;
    document.body.style.overflow = '';
    this.router.navigate(['/components/alta/salud']);
  }, 2500); // ajusta el tiempo si lo deseas
}

}
