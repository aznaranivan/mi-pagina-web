import { Component } from '@angular/core';

@Component({
  selector: 'app-hiyasu',
  standalone: false,
  templateUrl: './hiyasu.component.html',
  styleUrls: ['./hiyasu.component.css']
})
export class HiyasuComponent {
  equipos = [
    {
    nombre: 'Suneco Climamix H5 S09H5',
    potencia: '2,6 kW (frío) / 2,8 kW (calor)',
    eficiencia: 'A+ / A',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '334,87 €',
    imagen: 'assets/suneco-h5-s09h5.jpg',
    manual: 'manuales/suneco-h5-s09h5.pdf'
  },
  {
    nombre: 'Suneco Climamix S09H3',
    potencia: '2,5 kW (frío) / 2,7 kW (calor)',
    eficiencia: 'A+ / A',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '336,68 €',
    imagen: 'assets/suneco-s09h3.jpg',
    manual: 'manuales/suneco-s09h3.pdf'
  },
  {
    nombre: 'Suneco Climamix S12H3',
    potencia: '3,5 kW (frío) / 3,7 kW (calor)',
    eficiencia: 'A+ / A',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '361,19 €',
    imagen: 'assets/suneco-s12h3.jpg',
    manual: 'manuales/suneco-s12h3.pdf'
  },
  {
    nombre: 'Suneco Climamix H4 S09H4',
    potencia: '2,6 kW (frío) / 2,9 kW (calor)',
    eficiencia: 'A+ / A',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '361,19 €',
    imagen: 'assets/suneco-h4-s09h4.jpg',
    manual: 'manuales/suneco-h4-s09h4.pdf'
  },
  {
    nombre: 'Suneco Climamix H6 S12H6',
    potencia: '3,6 kW (frío) / 3,9 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '385,69 €',
    imagen: 'assets/suneco-h6-s12h6.jpg',
    manual: 'manuales/suneco-h6-s12h6.pdf'
  },
  {
    nombre: 'Suneco Climamix S18H3',
    potencia: '5,0 kW (frío) / 5,5 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 50 m²',
    gas: 'R-32',
    precio: '667,01 €',
    imagen: 'assets/suneco-s18h3.jpg',
    manual: 'manuales/suneco-s18h3.pdf'
  },
  {
    nombre: 'Suneco Climamix H6 S18H6',
    potencia: '5,2 kW (frío) / 5,7 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 50 m²',
    gas: 'R-32',
    precio: '692,42 €',
    imagen: 'assets/suneco-h6-s18h6.jpg',
    manual: 'manuales/suneco-h6-s18h6.pdf'
  },
  {
    nombre: 'Suneco Climamix S24H3',
    potencia: '7,0 kW (frío) / 7,5 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 70 m²',
    gas: 'R-32',
    precio: '897,52 €',
    imagen: 'assets/suneco-s24h3.jpg',
    manual: 'manuales/suneco-s24h3.pdf'
  },
  {
    nombre: 'Suneco Climamix H6 S24H6',
    potencia: '7,2 kW (frío) / 7,7 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 70 m²',
    gas: 'R-32',
    precio: '941,08 €',
    imagen: 'assets/suneco-h6-s24h6.jpg',
    manual: 'manuales/suneco-h6-s24h6.pdf'
  }
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
