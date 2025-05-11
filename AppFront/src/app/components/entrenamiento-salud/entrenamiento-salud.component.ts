import { Component } from '@angular/core';

@Component({
  selector: 'app-entrenamiento-salud',
  templateUrl: './entrenamiento-salud.component.html',
  standalone: false,
  styleUrls: ['./entrenamiento-salud.component.css']
})
export class EntrenamientoSaludComponent {
  entrenamiento = [
    {
      titulo: 'Mejora tu salud cardiovascular',
      descripcion: 'El ejercicio frecuente fortalece el corazón y mejora la circulación sanguínea.',
      imagen: '/assets/entrenamiento/cardio.jpg'
    },
    {
      titulo: 'Reduce el estrés y la ansiedad',
      descripcion: 'La actividad física libera endorfinas que mejoran el estado de ánimo.',
      imagen: '/assets/entrenamiento/estres.jpg'
    },
    {
      titulo: 'Músculos que no deben faltar',
      descripcion: 'Piernas, espalda y abdomen deben ser parte esencial de toda rutina.',
      imagen: '/assets/entrenamiento/musculos.jpg'
    },
    {
      titulo: 'Aumenta tu energía diaria',
      descripcion: 'Entrenar regularmente combate la fatiga y mejora tu productividad.',
      imagen: '/assets/entrenamiento/energia.jpg'
    },
    {
      titulo: 'Entrena con propósito',
      descripcion: 'Fijarte metas realistas te ayudará a mantener la motivación.',
      imagen: '/assets/entrenamiento/metas.jpg'
    },
    {
      titulo: 'Fortalece tus huesos y articulaciones',
      descripcion: 'El entrenamiento con peso ayuda a prevenir la osteoporosis.',
      imagen: '/assets/entrenamiento/huesos.jpg'
    }
  ];

  nutricion = [
    {
      titulo: '¿Qué son los carbohidratos?',
      descripcion: 'Fuente principal de energía. Ideales antes del entrenamiento.',
      imagen: '/assets/nutricion/carbohidratos.jpg'
    },
    {
      titulo: 'La importancia de la proteína',
      descripcion: 'Ayuda a recuperar y construir tejido muscular tras el ejercicio.',
      imagen: '/assets/nutricion/proteina.jpg'
    },
    {
      titulo: 'Grasas saludables',
      descripcion: 'Las grasas buenas (aguacate, frutos secos) son esenciales para el cerebro.',
      imagen: '/assets/nutricion/grasas.jpg'
    },
    {
      titulo: 'Vitaminas y minerales',
      descripcion: 'Refuerzan el sistema inmune y previenen lesiones.',
      imagen: '/assets/nutricion/vitaminas.jpg'
    },
    {
      titulo: 'Hidratación constante',
      descripcion: 'El agua regula la temperatura y mejora el rendimiento.',
      imagen: '/assets/nutricion/agua.jpg'
    },
    {
      titulo: 'Comidas post entrenamiento',
      descripcion: 'Una combinación de proteína y carbohidratos es clave tras entrenar.',
      imagen: '/assets/nutricion/post-entreno.jpg'
    }
  ];
}
