import { Component } from '@angular/core';

@Component({
  selector: 'app-samsung',
  standalone: false,
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent {
  equipos = [
    {
  nombre: "Samsung WindFree Comfort F-AR09NXT",
  potencia: "2,5 kW (frío) / 3,0 kW (calor)",
  eficiencia: "A++ (frío) / A+ (calor)",
  area: "Hasta 25 m²",
  gas: "R-32",
  precio: "548,63 €",
  imagen: "assets/samsung-ar09nxt.jpg",
  manual: "manuales/samsung-ar09nxt.pdf"
},
{
  nombre: "Samsung WindFree Comfort F-AR12NXT",
  potencia: "3,5 kW (frío) / 4,0 kW (calor)",
  eficiencia: "A++ (frío) / A+ (calor)",
  area: "Hasta 35 m²",
  gas: "R-32",
  precio: "680,37 €",
  imagen: "assets/samsung-ar12nxt.jpg",
  manual: "manuales/samsung-ar12nxt.pdf"
},
{
  nombre: "Samsung WindFree Comfort S2 12",
  potencia: "3,5 kW (frío) / 4,0 kW (calor)",
  eficiencia: "A++ (frío) / A+ (calor)",
  area: "Hasta 35 m²",
  gas: "R-32",
  precio: "850,74 €",
  imagen: "assets/samsung-s2-12.jpg",
  manual: "manuales/samsung-s2-12.pdf"
},
{
  nombre: "Samsung WindFree Avant S2 12",
  potencia: "3,5 kW (frío) / 4,0 kW (calor)",
  eficiencia: "A++ (frío) / A+ (calor)",
  area: "Hasta 35 m²",
  gas: "R-32",
  precio: "952,88 €",
  imagen: "assets/samsung-avant-s2-12.jpg",
  manual: "manuales/samsung-avant-s2-12.pdf"
},
{
  nombre: "Samsung WindFree Élite S2 12",
  potencia: "3,5 kW (frío) / 4,0 kW (calor)",
  eficiencia: "A+++ (frío) / A++ (calor)",
  area: "Hasta 35 m²",
  gas: "R-32",
  precio: "1.119,25 €",
  imagen: "assets/samsung-elite-s2-12.jpg",
  manual: "manuales/samsung-elite-s2-12.pdf"
},
{
  nombre: "Samsung WindFree™ Deluxe 3,5 kW",
  potencia: "3,5 kW (frío) / 4,0 kW (calor)",
  eficiencia: "A+++ (frío) / A++ (calor)",
  area: "Hasta 35 m²",
  gas: "R-32",
  precio: "2.816,61 €",
  imagen: "assets/samsung-deluxe-35kw.jpg",
  manual: "manuales/samsung-deluxe-35kw.pdf"
},
{
  nombre: "Samsung WindFree™ Deluxe 5 kW",
  potencia: "5,0 kW (frío) / 5,5 kW (calor)",
  eficiencia: "A+++ (frío) / A++ (calor)",
  area: "Hasta 50 m²",
  gas: "R-32",
  precio: "3.260,27 €",
  imagen: "assets/samsung-deluxe-50kw.jpg",
  manual: "manuales/samsung-deluxe-50kw.pdf"
},
{
  nombre: "Samsung WindFree™ Deluxe 7,1 kW",
  potencia: "7,1 kW (frío) / 8,0 kW (calor)",
  eficiencia: "A+++ (frío) / A++ (calor)",
  area: "Hasta 70 m²",
  gas: "R-32",
  precio: "3.857,21 €",
  imagen: "assets/samsung-deluxe-71kw.jpg",
  manual: "manuales/samsung-deluxe-71kw.pdf"
},

{
  nombre: "Samsung WindFree Comfort F-AJ050TXJAR12",
  potencia: "5,0 kW (frío) / 5,6 kW (calor)",
  eficiencia: "A+++ (frío) / A++ (calor)",
  area: "Hasta 50 m²",
  gas: "R-32",
  precio: "3.240,11 €",
  imagen: "assets/samsung-windfree-comfort-f-aj050txjar12.jpg",
  manual: "manuales/samsung-windfree-comfort-f-aj050txjar12.pdf"
}

  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
