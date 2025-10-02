import { Component } from '@angular/core';

@Component({
  selector: 'app-daikin',
  standalone: false,
  templateUrl: './daikin.component.html',
  styleUrls: ['./daikin.component.css']
})
export class DaikinCalefaccionComponent {
  equipos = [
    // --- Calefacción ---
    {
  nombre: 'Caldera a gas Daikin D2CND24SET',
  potencia: '24 kW',
  eficiencia: 'A+',
  area: 'Hasta 120 m²',
  gas: 'Gas natural',
  precio: '1.922,06 €',
  imagen: 'assets/daikin-d2cnd24set.jpg',
  manual: 'manuales/daikin-d2cnd24set.pdf'
},
{
  nombre: 'Caldera a gas Daikin D2CND28SET',
  potencia: '28 kW',
  eficiencia: 'A+',
  area: 'Hasta 140 m²',
  gas: 'Gas natural',
  precio: '2.214,01 €',
  imagen: 'assets/daikin-d2cnd28set.jpg',
  manual: 'manuales/daikin-d2cnd28set.pdf'
},
{
  nombre: 'Caldera a gas Daikin EHYKOMB33AA2',
  potencia: '33 kW',
  eficiencia: 'A+',
  area: 'Hasta 150 m²',
  gas: 'Gas natural',
  precio: '2.232,45 €',
  imagen: 'assets/daikin-ehykomb33aa2.jpg',
  manual: 'manuales/daikin-ehykomb33aa2.pdf'
},
{
  nombre: 'Caldera a gas Daikin D2TND28SET',
  potencia: '28 kW',
  eficiencia: 'A+',
  area: 'Hasta 150 m²',
  gas: 'Gas natural',
  precio: '2.584,95 €',
  imagen: 'assets/daikin-d2tnd28set.jpg',
  manual: 'manuales/daikin-d2tnd28set.pdf'
},
    // --- Aerotermia ---
    {
  nombre: 'Bomba de calor Daikin ALTHERMA 3 Bibloc GABX415DV',
  potencia: '4.15 kW',
  eficiencia: 'A+++',
  area: 'Hasta 140 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '4.493,00 €',
  imagen: 'assets/daikin-altherma-3-bibloc-gabx415dv.jpg',
  manual: 'manuales/daikin-altherma-3-bibloc-gabx415dv.pdf'
},
{
  nombre: 'Bomba de calor Daikin ALTHERMA 3 Bibloc GABX615DV',
  potencia: '6.15 kW',
  eficiencia: 'A+++',
  area: 'Hasta 160 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '4.666,99 €',
  imagen: 'assets/daikin-altherma-3-bibloc-gabx615dv.jpg',
  manual: 'manuales/daikin-altherma-3-bibloc-gabx615dv.pdf'
},
{
  nombre: 'Bomba de calor Daikin ALTHERMA 3 Bibloc GABX618DV',
  potencia: '6.18 kW',
  eficiencia: 'A+++',
  area: 'Hasta 160 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '4.683,00 €',
  imagen: 'assets/daikin-altherma-3-bibloc-gabx618dv.jpg',
  manual: 'manuales/daikin-altherma-3-bibloc-gabx618dv.pdf'
},
{
  nombre: 'Bomba de calor Daikin ALTHERMA 3 Bibloc COMPACT GASX430DS',
  potencia: '4.30 kW',
  eficiencia: 'A+++',
  area: 'Hasta 150 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '4.686,00 €',
  imagen: 'assets/daikin-altherma-3-bibloc-compact-gasx430ds.jpg',
  manual: 'manuales/daikin-altherma-3-bibloc-compact-gasx430ds.pdf'
}
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas || 'Aerotermia'}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
