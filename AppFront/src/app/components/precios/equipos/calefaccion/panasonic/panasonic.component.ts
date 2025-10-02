import { Component } from '@angular/core';

@Component({
  selector: 'app-panasonic',
  templateUrl: './panasonic.component.html',
  standalone: false,
  styleUrls: ['./panasonic.component.css']
})
export class PanasonicCalefaccionComponent {
  equipos = [
// --- Aerotermia Panasonic ---
{
  nombre: 'Panasonic Aquarea Bibloc J KIT-WC03JE5',
  potencia: '3,2 kW',
  eficiencia: 'A++',
  area: 'Hasta 120-140 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '3.688,00 €',
  imagen: 'assets/panasonic-bibloc-wc03je5.jpg',
  manual: 'manuales/panasonic-bibloc-wc03je5.pdf'
},
{
  nombre: 'Panasonic Aquarea High Performance serie K KIT-WC03K3E5',
  potencia: '3,2 kW',
  eficiencia: 'A++',
  area: 'Hasta 130-150 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '4.315,36 €',
  imagen: 'assets/panasonic-bibloc-wc03k3e5.jpg',
  manual: 'manuales/panasonic-bibloc-wc03k3e5.pdf'
},
{
  nombre: 'Panasonic Aquarea Bibloc J KIT-WC05JE5',
  potencia: '5 kW',
  eficiencia: 'A++',
  area: 'Hasta 150-160 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '4.485,75 €',
  imagen: 'assets/panasonic-bibloc-wc05je5.jpg',
  manual: 'manuales/panasonic-bibloc-wc05je5.pdf'
},
{
  nombre: 'Panasonic Aquarea Bibloc J KIT-WC07JE5',
  potencia: '7 kW',
  eficiencia: 'A++',
  area: 'Hasta 160-170 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '4.496,00 €',
  imagen: 'assets/panasonic-bibloc-wc07je5.jpg',
  manual: 'manuales/panasonic-bibloc-wc07je5.pdf'
},
{
  nombre: 'Panasonic Aquarea High Performance serie K KIT-WC05K3E5',
  potencia: '5 kW',
  eficiencia: 'A++',
  area: 'Hasta 170-180 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '4.484,79 €',
  imagen: 'assets/panasonic-bibloc-wc05k3e5.jpg',
  manual: 'manuales/panasonic-bibloc-wc05k3e5.pdf'
},
{
  nombre: 'Panasonic Aquarea HT Bibloc KIT-WHF09F3E5',
  potencia: '9 kW',
  eficiencia: 'A++',
  area: 'Hasta 170-180 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '5.223,21 €',
  imagen: 'assets/panasonic-bibloc-whf09f3e5.jpg',
  manual: 'manuales/panasonic-bibloc-whf09f3e5.pdf'
},
{
  nombre: 'Panasonic Aquarea T-CAP Bibloc H KIT-WXC09H3E5',
  potencia: '9 kW',
  eficiencia: 'A+++',
  area: 'Hasta 180 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '5.549,23 €',
  imagen: 'assets/panasonic-bibloc-wxc09h3e5.jpg',
  manual: 'manuales/panasonic-bibloc-wxc09h3e5.pdf'
},
{
  nombre: 'Panasonic Aquarea High Performance bibloc H KIT-WC09H3E8',
  potencia: '10 kW',
  eficiencia: 'A+++',
  area: 'Hasta 180-200 m²',
  tipo: 'Bibloc (unidad interior + exterior)',
  precio: '5.928,41 €',
  imagen: 'assets/panasonic-bibloc-wc09h3e8.jpg',
  manual: 'manuales/panasonic-bibloc-wc09h3e8.pdf'
}
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
