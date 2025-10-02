import { Component } from '@angular/core';

@Component({
  selector: 'app-daikin',
  standalone: false,
  templateUrl: './daikin.component.html',
  styleUrls: ['./daikin.component.css']
})
export class DaikinComponent {
  equipos = [
    {
    nombre: 'Daikin TXF25B Sensira',
    potencia: '2,5 kW (frío) / 3,4 kW (calor)',
    eficiencia: 'A++ (frío) / A+++ (calor)',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '499,00 €',
    imagen: 'assets/txf25b.jpg',
    manual: 'manuales/txf25b.pdf'
  },
  {
    nombre: 'Daikin TXF35E Sensira',
    potencia: '3,5 kW (frío) / 4,2 kW (calor)',
    eficiencia: 'A++ (frío) / A+++ (calor)',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '588,00 €',
    imagen: 'assets/txf35e.jpg',
    manual: 'manuales/txf35e.pdf'
  },
  {
    nombre: 'Daikin TXF42E Sensira',
    potencia: '3,7 kW (frío) / 4,5 kW (calor)',
    eficiencia: 'A++ (frío) / A+++ (calor)',
    area: 'Hasta 42 m²',
    gas: 'R-32',
    precio: '843,79 €',
    imagen: 'assets/txf42e.jpg',
    manual: 'manuales/txf42e.pdf'
  },
  {
    nombre: 'Daikin TXM35R Perfera',
    potencia: '3,4 kW (frío) / 4,0 kW (calor)',
    eficiencia: 'A+++',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '906,00 €',
    imagen: 'assets/txm35r.jpg',
    manual: 'manuales/txm35r.pdf'
  },
  {
    nombre: 'Daikin 2MXF40C2 Multisplit',
    potencia: '4,0 kW (x2)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 40 m² por unidad',
    gas: 'R-32',
    precio: '1.298,00 €',
    imagen: 'assets/2mxf40c2.jpg',
    manual: 'manuales/2mxf40c2.pdf'
  },
  {
    nombre: 'Daikin TXF50F Sensira',
    potencia: '4,3 kW (frío) / 5,2 kW (calor)',
    eficiencia: 'A++ (frío) / A+++ (calor)',
    area: 'Hasta 40 m²',
    gas: 'R-32',
    precio: '1.357,62 €',
    imagen: 'assets/txf50f.jpg',
    manual: 'manuales/txf50f.pdf'
  },
  {
    nombre: 'Daikin TXC60D Sensira',
    potencia: '6,2 kW (frío) / 6,4 kW (calor)',
    eficiencia: 'A++ (frío) / A++ (calor)',
    area: 'Hasta 60 m²',
    gas: 'R-32',
    precio: '1.598,66 €',
    imagen: 'assets/txc60d.jpg',
    manual: 'manuales/txc60d.pdf'
  },
  {
    nombre: 'Daikin TXP50N Comfora',
    potencia: '5,0 kW (frío) / 6,0 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 50 m²',
    gas: 'R-32',
    precio: '1.839,90 €',
    imagen: 'assets/txp50n.jpg',
    manual: 'manuales/txp50n.pdf'
  },
  {
    nombre: 'Daikin 3MXF52F2 Multisplit',
    potencia: '2,5 kW (x3)',
    eficiencia: 'A++',
    area: 'Hasta 35 m² por unidad',
    gas: 'R-32',
    precio: '2.087,25 €',
    imagen: 'assets/3mxf52f2.jpg',
    manual: 'manuales/3mxf52f2.pdf'
  }
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio} €`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
