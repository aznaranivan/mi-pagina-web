import { Component } from '@angular/core';

@Component({
  selector: 'app-htw',
  standalone: false,
  templateUrl: './htw.component.html',
  styleUrls: ['./htw.component.css']
})
export class HtwComponent {
  equipos = [
    {
    nombre: 'Ferroli Giada S 9 WIFI',
    potencia: '2,5 kW (frío) / 2,7 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '298,01 €',
    imagen: 'assets/ferroli-giada-s9.jpg',
    manual: 'manuales/ferroli-giada-s9.pdf'
  },
  {
    nombre: 'Ferroli Giada S 12 WIFI',
    potencia: '3,5 kW (frío) / 3,7 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '320,00 €',
    imagen: 'assets/ferroli-giada-s12.jpg',
    manual: 'manuales/ferroli-giada-s12.pdf'
  },
  {
    nombre: 'Ferroli Ambra S 9 WIFI',
    potencia: '2,6 kW (frío) / 2,9 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '342,04 €',
    imagen: 'assets/ferroli-ambra-s9.jpg',
    manual: 'manuales/ferroli-ambra-s9.pdf'
  },
  {
    nombre: 'Ferroli Diamant S 9 WIFI',
    potencia: '2,7 kW (frío) / 3,0 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '366,99 €',
    imagen: 'assets/ferroli-diamant-s9.jpg',
    manual: 'manuales/ferroli-diamant-s9.pdf'
  },
  {
    nombre: 'Ferroli Giada S 18',
    potencia: '5,0 kW (frío) / 5,2 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 50 m²',
    gas: 'R-32',
    precio: '578,80 €',
    imagen: 'assets/ferroli-giada-s18.jpg',
    manual: 'manuales/ferroli-giada-s18.pdf'
  },
  {
    nombre: 'Ferroli Ambra S 18 WIFI',
    potencia: '5,2 kW (frío) / 5,5 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 50 m²',
    gas: 'R-32',
    precio: '616,97 €',
    imagen: 'assets/ferroli-ambra-s18.jpg',
    manual: 'manuales/ferroli-ambra-s18.pdf'
  },
  {
    nombre: 'Ferroli Diamant S 18 WIFI',
    potencia: '5,3 kW (frío) / 5,7 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 50 m²',
    gas: 'R-32',
    precio: '628,99 €',
    imagen: 'assets/ferroli-diamant-s18.jpg',
    manual: 'manuales/ferroli-diamant-s18.pdf'
  },
  {
    nombre: 'Ferroli Giada S 24',
    potencia: '7,0 kW (frío) / 7,5 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 70 m²',
    gas: 'R-32',
    precio: '722,81 €',
    imagen: 'assets/ferroli-giada-s24.jpg',
    manual: 'manuales/ferroli-giada-s24.pdf'
  },
  {
    nombre: 'Ferroli Diamant S 24 WIFI',
    potencia: '7,2 kW (frío) / 7,7 kW (calor)',
    eficiencia: 'A++ / A+',
    area: 'Hasta 70 m²',
    gas: 'R-32',
    precio: '803,34 €',
    imagen: 'assets/ferroli-diamant-s24.jpg',
    manual: 'manuales/ferroli-diamant-s24.pdf'
  }
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
