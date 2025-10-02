import { Component } from '@angular/core';

@Component({
  selector: 'app-baxi',
  standalone: false,
  templateUrl: './baxi.component.html',
  styleUrls: ['./baxi.component.css']
})
export class BaxiComponent {
  equipos = [
    {
  nombre: "Baxi ANORI LSG35",
  potencia: "3,6 kW (frío) / 3,7 kW (calor)",
  eficiencia: "A++ (frío) / A+ (calor)",
  area: "Hasta 35 m²",
  gas: "R-32",
  precio: "464,65 €",
  imagen: "assets/baxi-anori-lsg35.jpg",
  manual: "manuales/baxi-anori-lsg35.pdf"
},
{
  nombre: "Baxi ANORI Mono-2 JSG50",
  potencia: "5,0 kW (frío) / 5,4 kW (calor)",
  eficiencia: "A++ (frío) / A+ (calor)",
  area: "Hasta 50 m²",
  gas: "R-32",
  precio: "609,84 €",
  imagen: "assets/baxi-anori-jsg50.jpg",
  manual: "manuales/baxi-anori-jsg50.pdf"
},
{
  nombre: "Baxi ANORI Mono-2 JSG70",
  potencia: "7,0 kW (frío) / 7,05 kW (calor)",
  eficiencia: "A+ (frío) / A (calor)",
  area: "Hasta 70 m²",
  gas: "R-32",
  precio: "763,64 €",
  imagen: "assets/baxi-anori-jsg70.jpg",
  manual: "manuales/baxi-anori-jsg70.pdf"
},
{
  nombre: "Baxi ANORI LSG50",
  potencia: "5,3 kW (frío) / 5,4 kW (calor)",
  eficiencia: "A++ (frío) / A+ (calor)",
  area: "Hasta 42 m²",
  gas: "R-32",
  precio: "775,02 €",
  imagen: "assets/baxi-anori-lsg50.jpg",
  manual: "manuales/baxi-anori-lsg50.pdf"
},
{
  nombre: "Baxi AMIK MHG50 (SIKU)",
  potencia: "5,0 kW (frío) / 5,4 kW (calor)",
  eficiencia: "A++ (frío) / A+ (calor)",
  area: "Hasta 50 m²",
  gas: "R-32",
  precio: "810,58 €",
  imagen: "assets/baxi-amik-mhg50.jpg",
  manual: "manuales/baxi-amik-mhg50.pdf"
},
{
  nombre: "Baxi ANORI LSG70",
  potencia: "7,03 kW (frío) / 7,05 kW (calor)",
  eficiencia: "A+ (frío) / A (calor)",
  area: "Hasta 70 m²",
  gas: "R-32",
  precio: "1.019,01 €",
  imagen: "assets/baxi-anori-lsg70.jpg",
  manual: "manuales/baxi-anori-lsg70.pdf"
},
{
  nombre: "Baxi QUILAK DSG25",
  potencia: "2,7 kW (frío) / 3,0 kW (calor)",
  eficiencia: "A+++ (frío) / A++ (calor)",
  area: "Hasta 25 m²",
  gas: "R-32",
  precio: "1.068,67 €",
  imagen: "assets/baxi-quilak-dsg25.jpg",
  manual: "manuales/baxi-quilak-dsg25.pdf"
},
{
  nombre: "Baxi QUILAK DSG35",
  potencia: "3,5 kW (frío) / 4,0 kW (calor)",
  eficiencia: "A+++ (frío) / A++ (calor)",
  area: "Hasta 35 m²",
  gas: "R-32",
  precio: "1.104,29 €",
  imagen: "assets/baxi-quilak-dsg35.jpg",
  manual: "manuales/baxi-quilak-dsg35.pdf"
},
{
  nombre: "Baxi Anori-2 LSGT50-2M + JSGNW25 + JSGNW35",
  potencia: "5,3 kW (frío) / 5,6 kW (calor)",
  eficiencia: "A++ (frío) / A+ (calor)",
  area: "Hasta 50 m² por unidad interior",
  gas: "R-32",
  precio: "982,00 €",
  imagen: "assets/baxi-anori-2-lsgt50-2m.jpg",
  manual: "manuales/baxi-anori-2-lsgt50-2m.pdf"
}

  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
