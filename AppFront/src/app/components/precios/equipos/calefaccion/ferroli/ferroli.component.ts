import { Component } from '@angular/core';

@Component({
  selector: 'app-ferroli',
  templateUrl: './ferroli.component.html',
  standalone: false,
  styleUrls: ['./ferroli.component.css']
})
export class FerroliComponent {
  equipos = [
    // --- Calefacción ---
    {
  nombre: 'Ferroli BLUEHELIX MAXIMA 28 C + Crono Connect Smart WIFI',
  potencia: '28 kW',
  eficiencia: 'A+',
  area: 'Hasta 120 m²',
  gas: 'Gas natural',
  precio: '1.366,25 €',
  imagen: 'assets/ferroli-bluehelix-maxima-28.jpg',
  manual: 'manuales/ferroli-bluehelix-maxima-28.pdf'
},
{
  nombre: 'Ferroli BLUEHELIX TECH RRT 34 C',
  potencia: '34 kW',
  eficiencia: 'A+',
  area: 'Hasta 150 m²',
  gas: 'Gas natural',
  precio: '1.386,37 €',
  imagen: 'assets/ferroli-bluehelix-tech-34.jpg',
  manual: 'manuales/ferroli-bluehelix-tech-34.pdf'
},
    {
  nombre: 'Ferroli SILENT eco 30 SI UNIT',
  potencia: '30 kW',
  eficiencia: 'A',
  area: 'Hasta 150 m²',
  gas: 'Gasoil',
  precio: '1.458,00 €',
  imagen: 'assets/ferroli-silent-eco-30.jpg',
  manual: 'manuales/ferroli-silent-eco-30.pdf'
},
{
  nombre: 'Ferroli ATLAS D eco 42 UNIT',
  potencia: '42 kW',
  eficiencia: 'A',
  area: 'Hasta 220 m²',
  gas: 'Gasoil',
  precio: '2.003,01 €',
  imagen: 'assets/ferroli-atlas-d-eco-42.jpg',
  manual: 'manuales/ferroli-atlas-d-eco-42.pdf'
}
,

    // --- Aerotermia ---
    {
  nombre: 'Ferroli OMNIA H 6',
  potencia: '6 kW',
  eficiencia: 'A+++',
  area: 'Hasta 120 m²',
  gas: 'R32',
  precio: '3.415,66 €',
  imagen: 'assets/ferroli-omnia-h6.jpg',
  manual: 'manuales/ferroli-omnia-h6.pdf'
},
{
  nombre: 'Ferroli OMNIA S 3.2 8',
  potencia: '8 kW',
  eficiencia: 'A+++',
  area: 'Hasta 160 m²',
  gas: 'R32',
  precio: '3.827,73 €',
  imagen: 'assets/ferroli-omnia-s-8.jpg',
  manual: 'manuales/ferroli-omnia-s-8.pdf'
},
{
  nombre: 'Ferroli OMNIA ST 3.2 10 WIFI',
  potencia: '10 kW',
  eficiencia: 'A+++',
  area: 'Hasta 200 m²',
  gas: 'R32',
  precio: '5.559,84 €',
  imagen: 'assets/ferroli-omnia-st-10.jpg',
  manual: 'manuales/ferroli-omnia-st-10.pdf'
},
{
  nombre: 'Ferroli OMNIA S HYBRID C 8',
  potencia: '8 kW + apoyo híbrido',
  eficiencia: 'A+++',
  area: 'Hasta 200 m²',
  gas: 'R32',
  precio: '7.638,49 €',
  imagen: 'assets/ferroli-omnia-hybrid-c8.jpg',
  manual: 'manuales/ferroli-omnia-hybrid-c8.pdf'
}

  ];

  verDetalles(equipo: any) {
    alert(
      `Detalles del equipo:\n${equipo.nombre}\n` +
      `Potencia: ${equipo.potencia}\n` +
      `Eficiencia: ${equipo.eficiencia}\n` +
      `Área: ${equipo.area}\n` +
      `${equipo.gas ? 'Gas: ' + equipo.gas + '\n' : ''}` +
      `${equipo.tipo ? 'Tipo: ' + equipo.tipo + '\n' : ''}` +
      `Precio: ${equipo.precio}`
    );
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
