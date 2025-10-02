import { Component } from '@angular/core';

@Component({
  selector: 'app-fujitsu',
  standalone: false,
  templateUrl: './fujitsu.component.html',
  styleUrls: ['./fujitsu.component.css']
})
export class FujitsuComponent {
equipos = [
  {
    nombre: 'Fujitsu ASY25KP',
    potencia: '2,5 kW (frío) / 3,2 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '455,00 €',
    imagen: 'assets/asy25kp.jpg',
    manual: 'manuales/asy25kp.pdf'
  },
  {
    nombre: 'Fujitsu ASY35KP',
    potencia: '3,4 kW (frío) / 3,8 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '472,00 €',
    imagen: 'assets/asy35kp.jpg',
    manual: 'manuales/asy35kp.pdf'
  },
  {
    nombre: 'Fujitsu ASY25-KGTF WIFI',
    potencia: '2,5 kW (frío) / 3,2 kW (calor)',
    eficiencia: 'A+++ (frío) / A++ (calor)',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '719,95 €',
    imagen: 'assets/asy25kgtf.jpg',
    manual: 'manuales/asy25kgtf.pdf'
  },
  {
    nombre: 'Fujitsu ASY35-KGTF WIFI',
    potencia: '3,5 kW (frío) / 4,0 kW (calor)',
    eficiencia: 'A+++ (frío) / A++ (calor)',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '964,25 €',
    imagen: 'assets/asy35kgtf.jpg',
    manual: 'manuales/asy35kgtf.pdf'
  },
  {
    nombre: 'Fujitsu ASY40UI-KM',
    potencia: '3,7 kW (frío) / 4,0 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 40 m²',
    gas: 'R-32',
    precio: '968,94 €',
    imagen: 'assets/asy40ui-km.jpg',
    manual: 'manuales/asy40ui-km.pdf'
  },
  {
    nombre: 'Fujitsu ASY50-KL',
    potencia: '5,0 kW (frío) / 6,0 kW (calor)',
    eficiencia: 'A++',
    area: 'Hasta 60 m²',
    gas: 'R-32',
    precio: '1.021,78 €',
    imagen: 'assets/asy50kl.jpg',
    manual: 'manuales/asy50kl.pdf'
  },
  {
    nombre: 'Fujitsu ASY50-KM',
    potencia: '5,0 kW (frío) / 6,0 kW (calor)',
    eficiencia: 'A++',
    area: 'Hasta 60 m²',
    gas: 'R-32',
    precio: '1.118,29 €',
    imagen: 'assets/asy50km.jpg',
    manual: 'manuales/asy50km.pdf'
  },
  {
    nombre: 'Fujitsu ASY71UI-KL',
    potencia: '6,1 kW (frío) / 7,0 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 70 m²',
    gas: 'R-32',
    precio: '1.437,48 €',
    imagen: 'assets/asy71ui-kl.jpg',
    manual: 'manuales/asy71ui-kl.pdf'
  },
  {
    nombre: 'Fujitsu ASY80-KM',
    potencia: '8,0 kW (frío) / 9,0 kW (calor)',
    eficiencia: 'A++',
    area: 'Hasta 80 m²',
    gas: 'R-32',
    precio: '2.457,45 €',
    imagen: 'assets/asy80km.jpg',
    manual: 'manuales/asy80km.pdf'
  }
];


  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
