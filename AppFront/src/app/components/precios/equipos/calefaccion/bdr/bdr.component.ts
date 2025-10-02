import { Component } from '@angular/core';

@Component({
  selector: 'app-bdr',
  templateUrl: './bdr.component.html',
  standalone: false,
  styleUrls: ['./bdr.component.css']
})
export class BdrComponent {
  equipos = [
    // --- Calefacción ---
    {
  nombre: 'Caldera a gas Baxi NEODENS PLUS 28/28 F ECO',
  potencia: '28 kW',
  eficiencia: 'A',
  area: 'Hasta 130 m²',
  gas: 'Gas natural',
  precio: '1.118,15 €',
  imagen: 'assets/baxi-neodens-plus-28f-eco.jpg',
  manual: 'manuales/baxi-neodens-plus-28f-eco.pdf'
},
{
  nombre: 'Caldera a gas Baxi Platinum iCompact 30/30 F',
  potencia: '30 kW',
  eficiencia: 'A+',
  area: 'Hasta 150 m²',
  gas: 'Gas natural',
  precio: '1.496,00 €',
  imagen: 'assets/baxi-platinum-icompact-30f.jpg',
  manual: 'manuales/baxi-platinum-icompact-30f.pdf'
},
    {
  nombre: 'Caldera a gasoil Baxi Gavina Plus ECO GT 30',
  potencia: '30 kW',
  eficiencia: 'A',
  area: 'Hasta 160 m²',
  gas: 'Gasoil',
  precio: '1.761,00 €',
  imagen: 'assets/baxi-gavina-plus-eco-gt30.jpg',
  manual: 'manuales/baxi-gavina-plus-eco-gt30.pdf'
},
{
  nombre: 'Caldera a gasoil Baxi Argenta GT Condens 32',
  potencia: '32 kW',
  eficiencia: 'A+',
  area: 'Hasta 180 m²',
  gas: 'Gasoil',
  precio: '2.797,00 €',
  imagen: 'assets/baxi-argenta-gt-condens-32.jpg',
  manual: 'manuales/baxi-argenta-gt-condens-32.pdf'
},

    // --- Aerotermia ---
    {
  nombre: 'Bomba de calor Baxi BC ACS 200 Split',
  potencia: '6 kW',
  eficiencia: 'A+',
  area: 'Hasta 150 m²',
  gas: 'R410A',
  precio: '3.417,04 €',
  imagen: 'assets/baxi-bc-acs-200-split.jpg',
  manual: 'manuales/baxi-bc-acs-200-split.pdf'
},
{
  nombre: 'Bomba de calor Baxi Platinum BC mural iR32 6MR',
  potencia: '6 kW',
  eficiencia: 'A+++',
  area: 'Hasta 160 m²',
  gas: 'R32',
  precio: '3.597,00 €',
  imagen: 'assets/baxi-platinum-bc-ir32-6mr.jpg',
  manual: 'manuales/baxi-platinum-bc-ir32-6mr.pdf'
},
{
  nombre: 'Bomba de calor Baxi Platinum BC mural iR32 8MR',
  potencia: '8 kW',
  eficiencia: 'A+++',
  area: 'Hasta 200 m²',
  gas: 'R32',
  precio: '4.051,00 €',
  imagen: 'assets/baxi-platinum-bc-ir32-8mr.jpg',
  manual: 'manuales/baxi-platinum-bc-ir32-8mr.pdf'
},
{
  nombre: 'Bomba de calor Baxi Platinum BC mural iR32 10MR',
  potencia: '10 kW',
  eficiencia: 'A+++',
  area: 'Hasta 240 m²',
  gas: 'R32',
  precio: '4.459,00 €',
  imagen: 'assets/baxi-platinum-bc-ir32-10mr.jpg',
  manual: 'manuales/baxi-platinum-bc-ir32-10mr.pdf'
}

  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas || '---'}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
