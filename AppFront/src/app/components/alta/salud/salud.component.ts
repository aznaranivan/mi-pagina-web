import { Component } from '@angular/core';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  standalone: false,
  styleUrls: ['./salud.component.css']
})
export class SaludComponent {
  habitos = [
    {
      nombre: 'Salud Física',
      items: [
        {
          titulo: 'Dormir bien',
          imagen: 'assets/habitos/dormir.png',
          descripcion: 'Mantén un horario de sueño regular de al menos 7-8 horas por noche.'
        },
        {
          titulo: 'Hidratación',
          imagen: 'assets/habitos/agua.png',
          descripcion: 'Bebe al menos 2 litros de agua al día para mantener el cuerpo hidratado.'
        },
        {
          titulo: 'Higiene personal',
          imagen: 'assets/habitos/higiene.png',
          descripcion: 'Lava tus manos, dientes y cuerpo regularmente.'
        }
      ]
    },
    {
      nombre: 'Salud Mental',
      items: [
        {
          titulo: 'Meditación',
          imagen: 'assets/habitos/meditacion.png',
          descripcion: 'Dedica 10 minutos al día a respirar profundamente y desconectar.'
        },
        {
          titulo: 'Tiempo sin pantallas',
          imagen: 'assets/habitos/desconectar.png',
          descripcion: 'Tómate descansos de las pantallas digitales cada pocas horas.'
        },
        {
          titulo: 'Gestión del estrés',
          imagen: 'assets/habitos/estres.png',
          descripcion: 'Utiliza técnicas de relajación como la respiración profunda o yoga.'
        }
      ]
    },
    {
      nombre: 'Salud Social y Emocional',
      items: [
        {
          titulo: 'Tiempo con seres queridos',
          imagen: 'assets/habitos/familia.png',
          descripcion: 'Comparte momentos de calidad con tu familia y amigos.'
        },
        {
          titulo: 'Escucha activa',
          imagen: 'assets/habitos/escucha.png',
          descripcion: 'Escucha con atención y empatía a las personas a tu alrededor.'
        },
        {
          titulo: 'Expresión emocional',
          imagen: 'assets/habitos/expresion.png',
          descripcion: 'Habla sobre cómo te sientes para liberar tensiones.'
        }
      ]
    }
  ];
}
