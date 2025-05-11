import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  standalone: false,
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {

    constructor(private router: Router) {}

  musculos = [
    {
      nombre: 'Espalda',
      ejercicios: [
        { titulo: 'Dominadas', imagen: 'assets/ejercicios/espalda1.png' },
        { titulo: 'Remo con barra', imagen: 'assets/ejercicios/espalda2.png' },
        { titulo: 'Peso muerto', imagen: 'assets/ejercicios/espalda3.png' }
      ]
    },
    {
      nombre: 'Pecho',
      ejercicios: [
        { titulo: 'Press banca', imagen: 'assets/ejercicios/pecho1.png' },
        { titulo: 'Aperturas', imagen: 'assets/ejercicios/pecho2.png' },
        { titulo: 'Press inclinado', imagen: 'assets/ejercicios/pecho3.png' }
      ]
    },
    {
      nombre: 'Pierna',
      ejercicios: [
        { titulo: 'Sentadilla', imagen: 'assets/ejercicios/pierna1.png' },
        { titulo: 'Prensa', imagen: 'assets/ejercicios/pierna2.png' },
        { titulo: 'Extensiones', imagen: 'assets/ejercicios/pierna3.png' }
      ]
    },
    {
      nombre: 'Bíceps',
      ejercicios: [
        { titulo: 'Curl con barra', imagen: 'assets/ejercicios/biceps1.png' },
        { titulo: 'Curl alterno', imagen: 'assets/ejercicios/biceps2.png' },
        { titulo: 'Curl concentrado', imagen: 'assets/ejercicios/biceps3.png' }
      ]
    },
    {
      nombre: 'Tríceps',
      ejercicios: [
        { titulo: 'Extensión polea', imagen: 'assets/ejercicios/triceps1.png' },
        { titulo: 'Press francés', imagen: 'assets/ejercicios/triceps2.png' },
        { titulo: 'Fondos', imagen: 'assets/ejercicios/triceps3.png' }
      ]
    },
    {
      nombre: 'Hombro',
      ejercicios: [
        { titulo: 'Press militar', imagen: 'assets/ejercicios/hombro1.png' },
        { titulo: 'Elevaciones laterales', imagen: 'assets/ejercicios/hombro2.png' },
        { titulo: 'Pájaros', imagen: 'assets/ejercicios/hombro3.png' }
      ]
    }
  ];

  verDetalle(nombre: string) {
    if (nombre.toLowerCase() === 'dominadas') {
    this.router.navigate(['/components/alta/ejercicios/espalda/dominadas']);
    }
  }
}
