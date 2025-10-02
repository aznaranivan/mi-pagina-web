import { Component } from '@angular/core';

@Component({
  selector: 'app-panasonic',
  standalone: false,
  templateUrl: './panasonic.component.html',
  styleUrls: ['./panasonic.component.css']
})
export class PanasonicComponent {
  equipos = [
    {
    nombre: 'Panasonic KIT-BZ25-ZKE',
    potencia: '2,5 kW (frío) / 3,2 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '470,69 €',
    imagen: 'assets/panasonic-bz25zke.jpg',
    manual: 'manuales/panasonic-bz25zke.pdf'
  },
  {
    nombre: 'Panasonic KIT-FZ35-WKE',
    potencia: '3,5 kW (frío) / 3,8 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '631,24 €',
    imagen: 'assets/panasonic-fz35wke.jpg',
    manual: 'manuales/panasonic-fz35wke.pdf'
  },
  {
    nombre: 'Panasonic KIT-TZ25-WKE',
    potencia: '2,5 kW (frío) / 3,2 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '656,95 €',
    imagen: 'assets/panasonic-tz25wke.jpg',
    manual: 'manuales/panasonic-tz25wke.pdf'
  },
  {
    nombre: 'Panasonic KIT-TZ35-WKE',
    potencia: '3,5 kW (frío) / 4,0 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '749,99 €',
    imagen: 'assets/panasonic-tz35wke.jpg',
    manual: 'manuales/panasonic-tz35wke.pdf'
  },
  {
    nombre: 'Panasonic Etherea 25 WIFI',
    potencia: '2,5 kW (frío) / 3,2 kW (calor)',
    eficiencia: 'A+++ (frío) / A+++ (calor)',
    area: 'Hasta 25 m²',
    gas: 'R-32',
    precio: '935,00 €',
    imagen: 'assets/panasonic-etherea25wifi.jpg',
    manual: 'manuales/panasonic-etherea25wifi.pdf'
  },
  {
    nombre: 'Panasonic KIT-UZ50-WKE',
    potencia: '5,0 kW (frío) / 5,8 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 50 m²',
    gas: 'R-32',
    precio: '971,63 €',
    imagen: 'assets/panasonic-uz50wke.jpg',
    manual: 'manuales/panasonic-uz50wke.pdf'
  },
  {
    nombre: 'Panasonic KIT-XZ35-VKE Plateado',
    potencia: '3,5 kW (frío) / 4,0 kW (calor)',
    eficiencia: 'A+++ (frío) / A+++ (calor)',
    area: 'Hasta 35 m²',
    gas: 'R-32',
    precio: '1.167,81 €',
    imagen: 'assets/panasonic-xz35vke.jpg',
    manual: 'manuales/panasonic-xz35vke.pdf'
  },
  {
    nombre: 'Panasonic Etherea 50 WIFI',
    potencia: '5,0 kW (frío) / 5,8 kW (calor)',
    eficiencia: 'A+++ (frío) / A++ (calor)',
    area: 'Hasta 50 m²',
    gas: 'R-32',
    precio: '1.670,55 €',
    imagen: 'assets/panasonic-etherea50wifi.jpg',
    manual: 'manuales/panasonic-etherea50wifi.pdf'
  },
  {
    nombre: 'Panasonic KIT-TZ71-WKE',
    potencia: '7,1 kW (frío) / 8,0 kW (calor)',
    eficiencia: 'A++ (frío) / A+ (calor)',
    area: 'Hasta 70 m²',
    gas: 'R-32',
    precio: '2.390,79 €',
    imagen: 'assets/panasonic-tz71wke.jpg',
    manual: 'manuales/panasonic-tz71wke.pdf'
  }
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
