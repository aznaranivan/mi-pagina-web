import { Component } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  standalone: false,
  templateUrl: './beneficios.html',
  styleUrls: ['./beneficios.css']
})
export class BeneficiosComponent {
  beneficios = [
    {
      titulo: 'Ahorro Energético Garantizado',
      descripcion: 'Nuestros sistemas Ecoclima optimizan el consumo eléctrico para reducir hasta un 40% en tu factura.',
      imagen: '/assets/ecoclima/beneficios/ahorro-energetico.jpg'
    },
    {
      titulo: 'Instalación Rápida y Profesional',
      descripcion: 'Contamos con técnicos certificados que realizan instalaciones limpias y sin complicaciones.',
      imagen: '/assets/ecoclima/beneficios/instalacion-rapida.jpg'
    },
    {
      titulo: 'Mayor Confort en tu Hogar',
      descripcion: 'Disfruta de una temperatura agradable durante todo el año gracias a una climatización eficiente.',
      imagen: '/assets/ecoclima/beneficios/confort-hogar.jpg'
    },
    {
      titulo: 'Atención Personalizada en tu Hogar',
      descripcion: 'Tu proyecto es atendido directamente por un especialista que visita tu vivienda para ofrecer la mejor solución a medida.',
      imagen: '/assets/ecoclima/beneficios/atencion-personalizada.jpg'
    }
  ];

  garantias = [
    {
      titulo: 'Garantía Extendida',
      descripcion: 'Ofrecemos garantía adicional sobre el equipo y la instalación para tu total tranquilidad.',
      imagen: '/assets/ecoclima/garantias/garantia-extendida.jpg'
    },
    {
      titulo: 'Mantenimiento Preventivo',
      descripcion: 'Programas de servicio para mantener tu equipo siempre en óptimas condiciones.',
      imagen: '/assets/ecoclima/garantias/mantenimiento.jpg'
    },
    {
      titulo: 'Soporte Cercano y Rápido',
      descripcion: 'Si surge algún inconveniente, nuestro equipo responderá de forma rápida para darte solución.',
      imagen: '/assets/ecoclima/garantias/soporte.jpg'
    },
    {
      titulo: 'Visita de Revisión y Presupuesto sin Compromiso',
      descripcion: 'Nos desplazamos a tu hogar para evaluar tus necesidades y ofrecer un presupuesto detallado y gratuito.',
      imagen: '/assets/ecoclima/garantias/revision-presupuesto.jpg'
    }
  ];
}
