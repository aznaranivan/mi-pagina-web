import { Component } from '@angular/core';

@Component({
  selector: 'app-daitsu',
  standalone: false,
  templateUrl: './daitsu.component.html',
  styleUrls: ['./daitsu.component.css']
})
export class DaitsuComponent {
  equipos = [
    {
      nombre: 'Daitsu Cool Pro DS-9KKD',
      potencia: '2,5 kW (frío) / 2,8 kW (calor)',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 25 m²',
      gas: 'R-32',
      precio: '348,00 €',
      imagen: 'assets/daitsu-coolpro-ds9kkd.jpg',
      manual: 'manuales/daitsu-coolpro-ds9kkd.pdf'
  },
  {
      nombre: 'Daitsu Cool Pro DS-12KKD',
      potencia: '3,5 kW (frío) / 3,6 kW (calor)',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 35 m²',
      gas: 'R-32',
      precio: '369,88 €',
      imagen: 'assets/daitsu-coolpro-ds12kkd.jpg',
      manual: 'manuales/daitsu-coolpro-ds12kkd.pdf'
  },
  {
      nombre: 'Daitsu ASD 12 KI-DB',
      potencia: '3,5 kW (frío) / 3,7 kW (calor)',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 35 m²',
      gas: 'R-32',
      precio: '385,00 €',
      imagen: 'assets/daitsu-asd12-ki-db.jpg',
      manual: 'manuales/daitsu-asd12-ki-db.pdf'
  },
  {
      nombre: 'Daitsu ASD 9 KI-DB',
      potencia: '2,5 kW (frío) / 2,8 kW (calor)',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 25 m²',
      gas: 'R-32',
      precio: '415,85 €',
      imagen: 'assets/daitsu-asd9-ki-db.jpg',
      manual: 'manuales/daitsu-asd9-ki-db.pdf'
  },
  {
      nombre: 'Daitsu AGIO ASD 12K-DG WiFi',
      potencia: '3,5 kW (frío) / 3,8 kW (calor)',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 35 m²',
      gas: 'R-32',
      precio: '489,00 €',
      imagen: 'assets/daitsu-agio-asd12k-dg-wifi.jpg',
      manual: 'manuales/daitsu-agio-asd12k-dg-wifi.pdf'
  },
  {
      nombre: 'Daitsu Artic Plus DS12KTP5 WiFi',
      potencia: '3,5 kW (frío) / 4,0 kW (calor)',
      eficiencia: 'A+++ (frío) / A++ (calor)',
      area: 'Hasta 35 m²',
      gas: 'R-32',
      precio: '588,06 €',
      imagen: 'assets/daitsu-articplus-ds12ktp5-wifi.jpg',
      manual: 'manuales/daitsu-articplus-ds12ktp5-wifi.pdf'
  },
  {
      nombre: 'Daitsu Cool Pro DS-24KKD',
      potencia: '7,0 kW (frío) / 7,5 kW (calor)',
      eficiencia: 'A++ (frío) / A+ (calor)',
      area: 'Hasta 70 m²',
      gas: 'R-32',
      precio: '829,03 €',
      imagen: 'assets/daitsu-coolpro-ds24kkd.jpg',
      manual: 'manuales/daitsu-coolpro-ds24kkd.pdf'
  },
{
  nombre: 'Daitsu Aura ASD18K-DA WiFi',
  potencia: '5,2 kW (frío) / 4,6 kW (calor)',
  eficiencia: 'A++ (frío) / A+ (calor)',
  area: 'Hasta 45 m²',
  gas: 'R-32',
  precio: '1.146,16 €',
  imagen: 'assets/daitsu-aura-asd18k-da-wifi.jpg',
  manual: 'manuales/daitsu-aura-asd18k-da-wifi.pdf'
},
{
  nombre: 'Daitsu FREEMAX-ARTIC DSM-9U2KDT UE18 WiFi',
  potencia: '2x1',
  eficiencia: 'A++ (frío) / A+ (calor)',
  area: 'Hasta 40 m² (20 m² por unidad)',
  gas: 'R-32',
  precio: '1.543,66 €',
  imagen: 'assets/daitsu-freemax-artic-dsm-9u2kdt-ue18.jpg',
  manual: 'manuales/daitsu-freemax-artic-dsm-9u2kdt-ue18.pdf'
}

  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
