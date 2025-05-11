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

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/components/informacion/usuario']);
  }

  irADietas() {
    this.loading = true;
    document.body.style.overflow = 'hidden'; // Bloquea scroll

    setTimeout(() => {
      this.loading = false;
      document.body.style.overflow = ''; // Restaura scroll
      this.router.navigate(['/components/dietas']);
    }, 3000);
  }

  irAEjercicios() {
  this.loading = true;
  setTimeout(() => {
    this.loading = false;
    this.router.navigate(['/components/alta/ejercicios']);
  }, 2000); // tiempo con la animación de carga
}


irAHabitos() {
  this.router.navigate(['/components/alta/salud']);
}

}
