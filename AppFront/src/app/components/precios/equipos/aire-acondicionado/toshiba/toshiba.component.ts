import { Component } from '@angular/core';

@Component({
  selector: 'app-toshiba',
  standalone: false,
  templateUrl: './toshiba.component.html',
  styleUrls: ['./toshiba.component.css']
})
export class ToshibaComponent {
  equipos = [
    {
      nombre: 'Toshiba SEIYA+ 10-2500W',
      potencia: '2,5 kW (frío) / 3,2 kW (calor)',
      eficiencia: 'A+++ (frío) / A+++ (calor)',
      area: 'Hasta 25 m²',
      gas: 'R-32',
      precio: '544,50 €',
      imagen: 'assets/toshiba-seiya-10.jpg',
      manual: 'manuales/toshiba-seiya-10.pdf'
  },
  {
      nombre: 'Toshiba SEIYA+ 13-3300W',
      potencia: '3,3 kW (frío) / 3,6 kW (calor)',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 35 m²',
      gas: 'R-32',
      precio: '589,88 €',
      imagen: 'assets/toshiba-seiya-13.jpg',
      manual: 'manuales/toshiba-seiya-13.pdf'
  },
  {
      nombre: 'Toshiba SEIYA+ 16-4200W',
      potencia: '4,2 kW (frío) / 5,0 kW (calor)',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 42 m²',
      gas: 'R-32',
      precio: '906,29 €',
      imagen: 'assets/toshiba-seiya-16.jpg',
      manual: 'manuales/toshiba-seiya-16.pdf'
  },
  {
      nombre: 'Toshiba SEIYA+ 18-5000W',
      potencia: '5,0 kW (frío) / 5,4 kW (calor)',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 50 m²',
      gas: 'R-32',
      precio: '1.057,54 €',
      imagen: 'assets/toshiba-seiya-18.jpg',
      manual: 'manuales/toshiba-seiya-18.pdf'
  },
  {
      nombre: 'Toshiba SEIYA+ 24-6500W',
      potencia: '6,5 kW (frío) / 7,0 kW (calor)',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 65 m²',
      gas: 'R-32',
      precio: '1.193,67 €',
      imagen: 'assets/toshiba-seiya-24.jpg',
      manual: 'manuales/toshiba-seiya-24.pdf'
  },
  {
      nombre: 'Toshiba HAORI 10-2500W',
      potencia: '2,5 kW (frío) / 3,2 kW (calor)',
      eficiencia: 'A+++ (frío) / A+++ (calor)',
      area: 'Hasta 25 m²',
      gas: 'R-32',
      precio: '1.081,59 €',
      imagen: 'assets/toshiba-haori-10.jpg',
      manual: 'manuales/toshiba-haori-10.pdf'
  },
  {
      nombre: 'Toshiba HAORI 13-3500W',
      potencia: '3,5 kW (frío) / 4,2 kW (calor)',
      eficiencia: 'A+++ (frío) / A+++ (calor)',
      area: 'Hasta 35 m²',
      gas: 'R-32',
      precio: '1.264,06 €',
      imagen: 'assets/toshiba-haori-13.jpg',
      manual: 'manuales/toshiba-haori-13.pdf'
  },
  {
      nombre: 'Toshiba HAORI 16-4600W',
      potencia: '4,6 kW (frío) / 5,5 kW (calor)',
      eficiencia: 'A++ (frío) / A+++ (calor)',
      area: 'Hasta 46 m²',
      gas: 'R-32',
      precio: '1.566,08 €',
      imagen: 'assets/toshiba-haori-16.jpg',
      manual: 'manuales/toshiba-haori-16.pdf'
  },
  {
      nombre: 'Toshiba Multi Split Inverter 3x1 - 13+10+10',
      potencia: '3x1',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 45 m² por unidad',
      gas: 'R-32',
      precio: '2.439,36 €',
      imagen: 'assets/toshiba-multi-3x1-13-10-10.jpg',
      manual: 'manuales/toshiba-multi-3x1-13-10-10.pdf'
  }
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
