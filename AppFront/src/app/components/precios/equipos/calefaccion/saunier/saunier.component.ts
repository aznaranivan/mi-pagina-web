import { Component } from '@angular/core';

@Component({
  selector: 'app-saunier',
  templateUrl: './saunier.component.html',
  standalone: false,
  styleUrls: ['./saunier.component.css']
})
export class SaunierComponent {
  equipos = [
    // --- Calefacción ---
    {
  nombre: 'Caldera de gas Saunier Duval ThemaFast Condens F 25',
  potencia: '25 kW',
  eficiencia: 'A',
  area: 'Hasta 130 m²',
  gas: 'Gas natural',
  precio: '1.349,00 €',
  imagen: 'assets/saunier-themafast-condens-f25.jpg',
  manual: 'manuales/saunier-themafast-condens-f25.pdf'
},
{
  nombre: 'Caldera de gas Saunier Duval Thema Condens 25-A',
  potencia: '25 kW',
  eficiencia: 'A',
  area: 'Hasta 120 m²',
  gas: 'Gas natural',
  precio: '1.517,10 €',
  imagen: 'assets/saunier-thema-condens-25a.jpg',
  manual: 'manuales/saunier-thema-condens-25a.pdf'
},
{
  nombre: 'Caldera de gas Saunier Duval IsoFast Condens Mi 35',
  potencia: '35 kW',
  eficiencia: 'A+',
  area: 'Hasta 220 m²',
  gas: 'Gas natural',
  precio: '2.728,01 €',
  imagen: 'assets/saunier-isofast-condens-mi35.jpg',
  manual: 'manuales/saunier-isofast-condens-mi35.pdf'
},
{
  nombre: 'Caldera de gas Saunier Duval IsoMax Condens 35 B',
  potencia: '35 kW',
  eficiencia: 'A+',
  area: 'Hasta 250 m²',
  gas: 'Gas natural',
  precio: '3.057,07 €',
  imagen: 'assets/saunier-isomax-condens-35b.jpg',
  manual: 'manuales/saunier-isomax-condens-35b.pdf'
},

    // --- Aerotermia ---
    {
  nombre: 'Aerotermia Saunier Duval Pack Autónomo Genia Air Tek 4',
  potencia: '4 kW',
  eficiencia: 'A++',
  area: 'Hasta 120 m²',
  tipo: 'Unidad interior + exterior',
  precio: '4.896,87 €',
  imagen: 'assets/saunier-genia-air-tek-4.jpg',
  manual: 'manuales/saunier-genia-air-tek-4.pdf'
},
{
  nombre: 'Aerotermia Saunier Duval Pack Autónomo Genia Air Tek 6',
  potencia: '6 kW',
  eficiencia: 'A++',
  area: 'Hasta 160 m²',
  tipo: 'Unidad interior + exterior',
  precio: '5.183,64 €',
  imagen: 'assets/saunier-genia-air-tek-6.jpg',
  manual: 'manuales/saunier-genia-air-tek-6.pdf'
},
{
  nombre: 'Aerotermia Saunier Duval Pack Autónomo Genia Air Tek 8',
  potencia: '8 kW',
  eficiencia: 'A++',
  area: 'Hasta 200 m²',
  tipo: 'Unidad interior + exterior',
  precio: '5.553,90 €',
  imagen: 'assets/saunier-genia-air-tek-8.jpg',
  manual: 'manuales/saunier-genia-air-tek-8.pdf'
},
{
  nombre: 'Aerotermia Saunier Duval Pack Autónomo Genia Air Split 8',
  potencia: '7,9 kW calefacción / 6,0 kW refrigeración',
  eficiencia: 'A++/A++',
  area: 'Hasta 200 m²',
  tipo: 'Unidad interior + exterior',
  precio: '5.556,25 €',
  imagen: 'assets/saunier-genia-air-split-8.jpg',
  manual: 'manuales/saunier-genia-air-split-8.pdf'
}

  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\n${equipo.gas ? 'Gas: ' + equipo.gas + '\n' : ''}${equipo.tipo ? 'Tipo: ' + equipo.tipo + '\n' : ''}Precio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
