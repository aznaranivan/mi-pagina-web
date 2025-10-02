import { Component } from '@angular/core';

@Component({
  selector: 'app-vaillant',
  standalone: false,
  templateUrl: './vaillant.component.html',
  styleUrls: ['./vaillant.component.css']
})
export class VaillantComponent {
  equipos = [
    // --- Calefacción ---
    {
  nombre: 'Caldera a gas de Condensación Vaillant ecoTEC plus VM ES 306/5-5 Solo Calefacción',
  potencia: '30 kW',
  eficiencia: 'A+',
  area: 'Hasta 150 m²',
  gas: 'Gas natural',
  precio: '1.670,28 €',
  imagen: 'assets/vaillant-ecotec-plus-vm-es-306-5-5.jpg',
  manual: 'manuales/vaillant-ecotec-plus-vm-es-306-5-5.pdf'
},
{
  nombre: 'Caldera a gas Vaillant ecoTEC plus VMW 26CS/1-5',
  potencia: '26 kW',
  eficiencia: 'A+',
  area: 'Hasta 140 m²',
  gas: 'Gas natural',
  precio: '1.860,00 €',
  imagen: 'assets/vaillant-ecotec-plus-vmw-26cs-1-5.jpg',
  manual: 'manuales/vaillant-ecotec-plus-vmw-26cs-1-5.pdf'
},
{
  nombre: 'Caldera a gas Vaillant ecoTEC Exclusive VM 246/5-7 Solo Calefacción',
  potencia: '24 kW',
  eficiencia: 'A+',
  area: 'Hasta 130 m²',
  gas: 'Gas natural',
  precio: '1.958,69 €',
  imagen: 'assets/vaillant-ecotec-exclusive-vm-246-5-7.jpg',
  manual: 'manuales/vaillant-ecotec-exclusive-vm-246-5-7.pdf'
},
{
  nombre: 'Caldera a gas Vaillant ecoTEC plus VM 35CS/1-5 (N-ES)',
  potencia: '35 kW',
  eficiencia: 'A+',
  area: 'Hasta 160 m²',
  gas: 'Gas natural',
  precio: '2.414,00 €',
  imagen: 'assets/vaillant-ecotec-plus-vm-35cs-1-5.jpg',
  manual: 'manuales/vaillant-ecotec-plus-vm-35cs-1-5.pdf'
},

    // --- Aerotermia ---
    {
    nombre: 'Vaillant aroTHERM VWL 85A Autonomo sensoCOMFORT',
    potencia: '8,5 kW',
    eficiencia: 'A+',
    area: 'Hasta 90 m²',
    tipo: 'Unidad interior + exterior',
    precio: '2.279,20 €',
    imagen: 'assets/vaillant-arotherm-vwl-85a.jpg',
    manual: 'manuales/vaillant-arotherm-vwl-85a.pdf'
  },
    {
    nombre: 'Vaillant aroTHERM VWL 155A Autonomo sensoCOMFORT',
    potencia: '15,5 kW',
    eficiencia: 'A+',
    area: 'Hasta 140 m²',
    tipo: 'Unidad interior + exterior',
    precio: '2.344,54 €',
    imagen: 'assets/vaillant-arotherm-vwl-155a.jpg',
    manual: 'manuales/vaillant-arotherm-vwl-155a.pdf'
  },
    {
    nombre: 'Vaillant aroTHERM VWL 115A Autonomo sensoCOMFORT',
    potencia: '11,5 kW',
    eficiencia: 'A++',
    area: 'Hasta 120 m²',
    tipo: 'Unidad interior + exterior',
    precio: '3.162,53 €',
    imagen: 'assets/vaillant-arotherm-vwl-115a.jpg',
    manual: 'manuales/vaillant-arotherm-vwl-115a.pdf'
  },
    {
    nombre: 'Vaillant Set autónomo aroTHERM Split 8',
    potencia: '19 kW',
    eficiencia: 'A+++',
    area: 'Hasta 180 m²',
    tipo: 'Unidad interior + exterior',
    precio: '6.196,01 €',
    imagen: 'assets/vaillant-arotherm-split-8.jpg',
    manual: 'manuales/vaillant-arotherm-split-8.pdf'
  }
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas || 'N/A'}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
