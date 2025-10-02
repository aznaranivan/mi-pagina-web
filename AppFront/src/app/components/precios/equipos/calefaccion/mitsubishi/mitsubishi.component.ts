import { Component } from '@angular/core';

@Component({
  selector: 'app-mitsubishi',
  templateUrl: './mitsubishi.component.html',
  standalone: false,
  styleUrls: ['./mitsubishi.component.css']
})
export class MitsubishiCalefaccionComponent {
  equipos = [
    // --- Calefacción ---
    {
    nombre: 'Mitsubishi Ecodan ERSD-VM2E + SUZ-SWM40VA2',
    potencia: '4 kW',
    eficiencia: 'A++',
    area: 'Hasta 120 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '3.866,95 €',
    imagen: 'assets/mitsubishi-ersd-swm30va.jpg',
    manual: 'manuales/mitsubishi-ersd-swm30va.pdf'
  },
  {
    nombre: 'Mitsubishi Ecodan ERSD-VM2E + SUZ-SWM60VA2',
    potencia: '6 kW',
    eficiencia: 'A++',
    area: 'Hasta 150 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '4.042,85 €',
    imagen: 'assets/mitsubishi-ersd-swm60va2.jpg',
    manual: 'manuales/mitsubishi-ersd-swm60va2.pdf'
  },
  {
    nombre: 'Mitsubishi Ecodan EGEN ERSD-VM2E + SUZ-SWM100VA',
    potencia: '10 kW',
    eficiencia: 'A++',
    area: 'Hasta 180 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '4.953,15 €',
    imagen: 'assets/mitsubishi-egen-ersd-swm100va.jpg',
    manual: 'manuales/mitsubishi-egen-ersd-swm100va.pdf'
  },
  {
    nombre: 'Mitsubishi Ecodan EGEN ERSF-VM2E + PUZ-SWM80VAA',
    potencia: '8 kW',
    eficiencia: 'A++',
    area: 'Hasta 150 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '5.013,15 €',
    imagen: 'assets/mitsubishi-egen-ersf-puz60vaa.jpg',
    manual: 'manuales/mitsubishi-egen-ersf-puz60vaa.pdf'
  },
  {
    nombre: 'Mitsubishi Ecodan EGEN ERST20D-VM2E + SUZ-SWM30VA',
    potencia: '3 kW',
    eficiencia: 'A++',
    area: 'Hasta 120 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '5.194,84 €',
    imagen: 'assets/mitsubishi-egen-erst20d-swm30va.jpg',
    manual: 'manuales/mitsubishi-egen-erst20d-swm30va.pdf'
  },
  {
    nombre: 'Mitsubishi Ecodan EGEN ERST20D-VM2E + SUZ-SWM60VA2',
    potencia: '6 kW',
    eficiencia: 'A++',
    area: 'Hasta 150 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '5.395,89 €',
    imagen: 'assets/mitsubishi-egen-erst20d-swm60va2.jpg',
    manual: 'manuales/mitsubishi-egen-erst20d-swm60va2.pdf'
  },
  {
    nombre: 'Mitsubishi Ecodan EGEN ERSF-VM2E + PUZ-SWM100VAA',
    potencia: '10 kW',
    eficiencia: 'A++',
    area: 'Hasta 180 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '5.770,89 €',
    imagen: 'assets/mitsubishi-egen-ersf-puz100vaa.jpg',
    manual: 'manuales/mitsubishi-egen-ersf-puz100vaa.pdf'
  },
  {
    nombre: 'Mitsubishi Ecodan EGEN ERST20D-VM2E + SUZ-SWM80VA2',
    potencia: '8 kW',
    eficiencia: 'A++',
    area: 'Hasta 160 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '5.883,00 €',
    imagen: 'assets/mitsubishi-egen-erst20d-swm80va2.jpg',
    manual: 'manuales/mitsubishi-egen-erst20d-swm80va2.pdf'
  }
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas/Tipo: ${equipo.gas || equipo.tipo}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
