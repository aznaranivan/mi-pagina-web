import { Component } from '@angular/core';

@Component({
  selector: 'app-junkers',
  standalone: false,
  templateUrl: './junkers.component.html',
  styleUrls: ['./junkers.component.css']
})
export class JunkersComponent {
  equipos = [
    // --- Calefacción ---
    {
  nombre: 'Caldera Junkers Cerapur Excellence Compact ZWB 30/36-1A',
  potencia: '30/36 kW',
  eficiencia: 'A+',
  area: 'Hasta 160 m²',
  gas: 'Gas natural',
  precio: '1.867,79 €',
  imagen: 'assets/junkers-cerapur-excellence-zwb30-36.jpg',
  manual: 'manuales/junkers-cerapur-excellence-zwb30-36.pdf'
},
{
  nombre: 'Caldera Junkers Cerapur Excellence Compact ZWB 30/32-1A',
  potencia: '30/32 kW',
  eficiencia: 'A+',
  area: 'Hasta 160 m²',
  gas: 'Gas natural',
  precio: '2.836,98 €',
  imagen: 'assets/junkers-cerapur-excellence-zwb30-32.jpg',
  manual: 'manuales/junkers-cerapur-excellence-zwb30-32.pdf'
},

    {
  nombre: 'Caldera de gasoil Junkers SuprapurCombi-O-25 Low NOx',
  potencia: '25 kW',
  eficiencia: 'A+',
  area: 'Hasta 140 m²',
  gas: 'Gasoil',
  precio: '2.663,15 €',
  imagen: 'assets/junkers-suprapurcombi-o-25.jpg',
  manual: 'manuales/junkers-suprapurcombi-o-25.pdf'
},
{
  nombre: 'Caldera de gasoil Junkers SuprapurCombi-O-32 Low NOx',
  potencia: '32 kW',
  eficiencia: 'A+',
  area: 'Hasta 160 m²',
  gas: 'Gasoil',
  precio: '2.815,07 €',
  imagen: 'assets/junkers-suprapurcombi-o-32.jpg',
  manual: 'manuales/junkers-suprapurcombi-o-32.pdf'
},


    // --- Aerotermia ---
    {
  nombre: 'Aerotermia Junkers Supraeco Frigo Split 11s',
  potencia: '15 kW',
  eficiencia: 'A+++',
  area: 'Hasta 180 m²',
  tipo: 'Split (unidad interior + exterior)',
  precio: '3.678,40 €',
  imagen: 'assets/junkers-supraeco-frigo-split-11s.jpg',
  manual: 'manuales/junkers-supraeco-frigo-split-11s.pdf'
},
{
  nombre: 'Aerotermia Junkers Supraeco Frigo Split 15s',
  potencia: '17 kW',
  eficiencia: 'A+++',
  area: 'Hasta 250 m²',
  tipo: 'Split (unidad interior + exterior)',
  precio: '4.424,97 €',
  imagen: 'assets/junkers-supraeco-frigo-split-15s.jpg',
  manual: 'manuales/junkers-supraeco-frigo-split-15s.pdf'
},
{
  nombre: 'Aerotermia Junkers Supraeco Frigo Split 13s',
  potencia: '16 kW',
  eficiencia: 'A+++',
  area: 'Hasta 220 m²',
  tipo: 'Split (unidad interior + exterior)',
  precio: '4.549,60 €',
  imagen: 'assets/junkers-supraeco-frigo-split-13s.jpg',
  manual: 'manuales/junkers-supraeco-frigo-split-13s.pdf'
},
{
  nombre: 'Aerotermia Junkers Supraeco Hydro SAO 60-2s',
  potencia: '60 kW',
  eficiencia: 'A+++',
  area: 'Hasta 500 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '6.373,24 €',
  imagen: 'assets/junkers-supraeco-hydro-sao-60-2s.jpg',
  manual: 'manuales/junkers-supraeco-hydro-sao-60-2s.pdf'
},

  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas || 'N/A'}\nTipo: ${equipo.tipo || 'N/A'}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
