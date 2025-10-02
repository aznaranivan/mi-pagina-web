import { Component } from '@angular/core';

@Component({
  selector: 'app-ariston',
  templateUrl: './ariston.component.html',
  standalone: false,
  styleUrls: ['./ariston.component.css']
})
export class AristonComponent {
  equipos = [
    // --- Calefacción ---
    {

  nombre: 'Ariston CLAS ONE WIFI 35',
  potencia: '31 kW',
  eficiencia: 'A+',
  area: 'Hasta 140 m²',
  gas: 'Gas natural',
  precio: '1.164,95 €',
  imagen: 'assets/ariston-clas-one-wifi-35.jpg',
  manual: 'manuales/ariston-clas-one-wifi-35.pdf'
},
{
  nombre: 'Ariston Genus One + Wifi 35 FF',
  potencia: '31 kW',
  eficiencia: 'A+',
  area: 'Hasta 150 m²',
  gas: 'Gas natural',
  precio: '1.678,51 €',
  imagen: 'assets/ariston-genus-one-wifi-35-ff.jpg',
  manual: 'manuales/ariston-genus-one-wifi-35-ff.pdf'
},
{
      
      
  nombre: 'Caldera a gas Ariston GENUS ONE NET 30',
  potencia: '30 kW',
  eficiencia: 'A+',
  area: 'Hasta 140 m²',
  gas: 'Gas natural',
  precio: '1.969,00 €',
  imagen: 'assets/ariston-genus-one-net-30.jpg',
  manual: 'manuales/ariston-genus-one-net-30.pdf'
},
{
  nombre: 'Caldera a gas Ariston ALTEAS ONE NET 35 EU',
  potencia: '32 kW',
  eficiencia: 'A+',
  area: 'Hasta 160 m²',
  gas: 'Gas natural',
  precio: '2.414,00 €',
  imagen: 'assets/ariston-alteas-one-net-35.jpg',
  manual: 'manuales/ariston-alteas-one-net-35.pdf'
},


    // --- Aerotermia ---
    {
  nombre: 'Bomba de calor Ariston NUOS SPLIT FLEX 150 WH',
  potencia: '2.5 kW',
  eficiencia: 'A+',
  area: 'Hasta 100 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '1.343,10 €',
  imagen: 'assets/ariston-nuos-split-flex-150wh.jpg',
  manual: 'manuales/ariston-nuos-split-flex-150wh.pdf'
},
{
  nombre: 'Bomba de calor Ariston NIMBUS POCKET 50 M NET',
  potencia: '7 kW',
  eficiencia: 'A++',
  area: 'Hasta 120 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '2.492,18 €',
  imagen: 'assets/ariston-nimbus-pocket-50m-net.jpg',
  manual: 'manuales/ariston-nimbus-pocket-50m-net.pdf'
},
{
  nombre: 'Bomba de calor Ariston NIMBUS POCKET 70 M NET',
  potencia: '11 kW',
  eficiencia: 'A++',
  area: 'Hasta 140 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '2.764,97 €',
  imagen: 'assets/ariston-nimbus-pocket-70m-net.jpg',
  manual: 'manuales/ariston-nimbus-pocket-70m-net.pdf'
},
{
  nombre: 'Bomba de calor Ariston NIMBUS PLUS 50 M NET',
  potencia: '7 kW',
  eficiencia: 'A++',
  area: 'Hasta 160 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '4.048,68 €',
  imagen: 'assets/ariston-nimbus-plus-50m-net.jpg',
  manual: 'manuales/ariston-nimbus-plus-50m-net.pdf'
}
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas/Tipo: ${equipo.gas || equipo.tipo}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
