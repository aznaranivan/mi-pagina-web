import { Component } from '@angular/core';

@Component({
  selector: 'app-lg',
  standalone: false,
  templateUrl: './lg.component.html',
  styleUrls: ['./lg.component.css']
})
export class LgComponent {
  equipos = [
     {
  nombre: 'LG Confort Replace 9 WIFI',
  potencia: '2,5 kW (frío) / 3,2 kW (calor)',
  eficiencia: 'A++ (frío) / A+ (calor)',
  area: 'Hasta 25 m²',
  gas: 'R-32',
  precio: '471,65 €',
  imagen: 'assets/lg-confort-replace-9.jpg',
  manual: 'manuales/lg-confort-replace-9.pdf'
},
{
  nombre: 'LG Confort Replace 12 WIFI',
  potencia: '3,5 kW (frío) / 4,0 kW (calor)',
  eficiencia: 'A++ (frío) / A+ (calor)',
  area: 'Hasta 35 m²',
  gas: 'R-32',
  precio: '495,60 €',
  imagen: 'assets/lg-confort-replace-12.jpg',
  manual: 'manuales/lg-confort-replace-12.pdf'
},
{
  nombre: 'LG Confort Replace 18 WIFI',
  potencia: '5,0 kW (frío) / 5,8 kW (calor)',
  eficiencia: 'A++ (frío) / A+ (calor)',
  area: 'Hasta 50 m²',
  gas: 'R-32',
  precio: '884,99 €',
  imagen: 'assets/lg-confort-replace-18.jpg',
  manual: 'manuales/lg-confort-replace-18.pdf'
},
{
  nombre: 'LG Winner 12',
  potencia: '3,5 kW (frío) / 4,0 kW (calor)',
  eficiencia: 'A++ (frío) / A+ (calor)',
  area: 'Hasta 35 m²',
  gas: 'R-32',
  precio: '912,87 €',
  imagen: 'assets/lg-winner-12.jpg',
  manual: 'manuales/lg-winner-12.pdf'
},
{
  nombre: 'LG ArtCool Mirror AC12BK',
  potencia: '3,5 kW (frío) / 4,0 kW (calor)',
  eficiencia: 'A++ (frío) / A+ (calor)',
  area: 'Hasta 35 m²',
  gas: 'R-32',
  precio: '936,00 €',
  imagen: 'assets/lg-artcool-mirror-12.jpg',
  manual: 'manuales/lg-artcool-mirror-12.pdf'
},
{
  nombre: 'LG DualCool M 12 WIFI',
  potencia: '3,5 kW (frío) / 4,0 kW (calor)',
  eficiencia: 'A+++ (frío) / A++ (calor)',
  area: 'Hasta 35 m²',
  gas: 'R-32',
  precio: '1.472,17 €',
  imagen: 'assets/lg-dualcool-m12.jpg',
  manual: 'manuales/lg-dualcool-m12.pdf'
},
{
  nombre: 'LG Deluxe Connect 12',
  potencia: '3,5 kW (frío) / 4,0 kW (calor)',
  eficiencia: 'A+++ (frío) / A++ (calor)',
  area: 'Hasta 35 m²',
  gas: 'R-32',
  precio: '1.812,74 €',
  imagen: 'assets/lg-deluxe-connect-12.jpg',
  manual: 'manuales/lg-deluxe-connect-12.pdf'
},
{
  nombre: 'LG ArtCool Gallery Photo 12 WIFI',
  potencia: '3,5 kW (frío) / 4,0 kW (calor)',
  eficiencia: 'A++ (frío) / A+ (calor)',
  area: 'Hasta 35 m²',
  gas: 'R-32',
  precio: '2.378,33 €',
  imagen: 'assets/lg-artcool-gallery-photo-12.jpg',
  manual: 'manuales/lg-artcool-gallery-photo-12.pdf'
},
{
  nombre: "LG Multi Split 2x1 Confort PC0909-R17",
  potencia: "2 x 2,0 kW (frío) / 2 x 2,0 kW (calor)",
  eficiencia: "A++ (frío) / A+ (calor)",
  area: "Hasta 17 m² por unidad interior",
  gas: "R-32",
  precio: "4.364,05 €",
  imagen: "assets/lg-mu2r17-pc09sq-pc09sq.jpg",
  manual: "manuales/lg-mu2r17-pc09sq-pc09sq.pdf"
}

  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
