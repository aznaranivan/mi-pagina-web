import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-electricidad',
  templateUrl: './electricidad.html',
  styleUrls: ['./electricidad.css'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class ElectricidadComponent {
  empresa = {
    nombre: 'EITE 205725',
    subtitulo: 'Instaladora autorizada · Climatización, instalaciones térmicas y baja tensión',
    descripcion:
      'EITE 205725 es una empresa instaladora, mantenedora y reparadora con amplia trayectoria en la Comunidad de Madrid. Estamos autorizados como instaladora de gas y como empresa instaladora y mantenedora de sistemas de climatización e instalaciones térmicas en edificios. También contamos con autorización para realizar instalaciones eléctricas de baja tensión. Prestamos servicios de proyectos, legalizaciones, reparación y mantenimiento cumpliendo la normativa vigente.',
    datos: [
      'Instaladora de gas autorizada — Comunidad de Madrid',
      'Empresa instaladora, mantenedora y reparadora de sistemas de climatización', 
      'Empresa mantenedora de instalaciones térmicas en edificios',
      'Autorizada en instalaciones eléctricas de baja tensión'
    ]
  };

  servicios = [
    { titulo: 'Proyectos y legalizaciones', descripcion: 'Elaboración y tramitación de proyectos, boletines y certificados para instalaciones eléctricas, térmicas y de gas, asegurando el cumplimiento reglamentario.', imagen: '/assets/electricidad/project1.jpg' },
    { titulo: 'Instalación y montaje', descripcion: 'Ejecución de instalaciones en vivienda, comercio e industria: montaje de cuadros, canalizaciones, protecciones y puesta en servicio de redes eléctricas, equipos de climatización y sistemas térmicos.', imagen: '/assets/electricidad/project2.jpg' },
    { titulo: 'Mantenimiento preventivo', descripcion: 'Planes de mantenimiento periódico para instalaciones eléctricas, equipos de climatización e instalaciones térmicas en edificios para garantizar seguridad y eficiencia.', imagen: '/assets/electricidad/project3.jpg' },
    { titulo: 'Integración y coordinación', descripcion: 'Coordinamos la instalación eléctrica con sistemas de climatización y térmicos, incluyendo gestión energética y control, para optimizar consumo y seguridad.', imagen: '/assets/electricidad/project4.jpg' }
  ];

  proyectos = [
    { titulo: 'Renovación eléctrica y térmica en edificio residencial', ubicacion: 'Madrid (Chamartín)', resumen: 'Sustitución de cuadro general, renovación de cableado y actualización de protecciones junto a mejoras en la instalación térmica del edificio para eficiencia y cumplimiento normativo.', imagen: '/assets/electricidad/proyecto1.jpg' },
    { titulo: 'Integración de sistema HVAC y control energético', ubicacion: 'Alcobendas', resumen: 'Coordinación e integración eléctrica de unidades de climatización con sistema de control y gestión energética, garantizando compatibilidad y seguridad.', imagen: '/assets/electricidad/proyecto2.jpg' }
  ];

  certificaciones = [
    { nombre: 'Instaladora de gas autorizada — Comunidad de Madrid' },
    { nombre: 'Empresa instaladora, mantenedora y reparadora de sistemas de climatización' },
    { nombre: 'Empresa mantenedora de instalaciones térmicas en edificios' },
    { nombre: 'Autorización para instalaciones eléctricas de baja tensión' }
  ];

  contacto = { texto: 'Solicita un estudio técnico gratuito y presupuesto sin compromiso adaptado a tus autorizaciones y necesidades.', boton: 'Solicitar estudio' };
}

