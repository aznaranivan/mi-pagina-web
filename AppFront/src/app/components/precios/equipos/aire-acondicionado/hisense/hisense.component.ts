import { Component } from '@angular/core';

@Component({
  selector: 'app-hisense',
  standalone: false,
  templateUrl: './hisense.component.html',
  styleUrls: ['./hisense.component.css']
})
export class HisenseComponent {
  equipos = [
    {
    nombre: 'Hisense Brissa 9K CA25YR03',
    potencia: '2,6 kW (frío) / 2,8 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '300,00 €',
    imagen: 'assets/hisense-brissa-9k.jpg',
    manual: 'manuales/hisense-brissa-9k.pdf'
  },
  {
    nombre: 'Hisense Brissa 12 CA35YR03',
    potencia: '3,5 kW (frío) / 3,7 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '319,00 €',
    imagen: 'assets/hisense-brissa-12.jpg',
    manual: 'manuales/hisense-brissa-12.pdf'
  },
  {
    nombre: 'Hisense Style CF25YR04',
    potencia: '2,6 kW (frío) / 2,8 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '348,89 €',
    imagen: 'assets/hisense-style-cf25.jpg',
    manual: 'manuales/hisense-style-cf25.pdf'
  },
  {
    nombre: 'Hisense Style CF35MR04',
    potencia: '3,5 kW (frío) / 3,7 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '372,99 €',
    imagen: 'assets/hisense-style-cf35.jpg',
    manual: 'manuales/hisense-style-cf35.pdf'
  },
  {
    nombre: 'Hisense Comfort 09',
    potencia: '2,6 kW (frío) / 2,8 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '429,36 €',
    imagen: 'assets/hisense-comfort-09.jpg',
    manual: 'manuales/hisense-comfort-09.pdf'
  },
  {
    nombre: 'Hisense Energy Pro X 9K WiFi',
    potencia: '2,6 kW (frío) / 3,2 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '595,96 €',
    imagen: 'assets/hisense-energy-pro-x-9k.jpg',
    manual: 'manuales/hisense-energy-pro-x-9k.pdf'
  },
  {
    nombre: 'Hisense Brissa 18 CA50XS1A',
    potencia: '4,3 kW (frío) / 4,8 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 40 m²',
    gas: 'R-32',
    precio: '657,68 €',
    imagen: 'assets/hisense-brissa-18.jpg',
    manual: 'manuales/hisense-brissa-18.pdf'
  },
  {
    nombre: 'Hisense Brissa 24 CA70BT1A',
    potencia: '5,0 kW (frío) / 5,6 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 50 m²',
    gas: 'R-32',
    precio: '733,14 €',
    imagen: 'assets/hisense-brissa-24.jpg',
    manual: 'manuales/hisense-brissa-24.pdf'
  },
  {
  nombre: 'Hisense Uni Pure Black 35',
  potencia: '3,5 kW (frío) / 3,9 kW (calor)',
  eficiencia: 'A+++ / A++',
  area: 'Hasta 35 m²',
  gas: 'R-32',
  precio: '1.073,88 €',
  imagen: 'assets/hisense-uni-pure-black-35.jpg',
  manual: 'manuales/hisense-uni-pure-black-35.pdf'
}

  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
