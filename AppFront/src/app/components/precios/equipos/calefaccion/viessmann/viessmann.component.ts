import { Component } from '@angular/core';

@Component({
  selector: 'app-viessmann',
  templateUrl: './viessmann.component.html',
  standalone: false,
  styleUrls: ['./viessmann.component.css']
})
export class ViessmannComponent {
  equipos = [
    // --- Calefacción ---
    {
    nombre: 'Caldera a gas Viessmann Vitodens 111-W B1LF',
    potencia: '32/34 kW',
    eficiencia: 'A+',
    area: 'Hasta 140 m²',
    gas: 'Gas natural',
    precio: '2.865,84 €',
    imagen: 'assets/viessmann-vitodens-111w-b1lf.jpg',
    manual: 'manuales/viessmann-vitodens-111w-b1lf.pdf'
  },
  {
    nombre: 'Caldera de condensación a gas Viessmann Vitodens 200-W B2HF',
    potencia: '32 kW',
    eficiencia: 'A+',
    area: 'Hasta 150 m²',
    gas: 'Gas natural',
    precio: '2.906,13 €',
    imagen: 'assets/viessmann-vitodens-200w-b2hf.jpg',
    manual: 'manuales/viessmann-vitodens-200w-b2hf.pdf'
  },
    {
    nombre: 'Caldera a gasoleo Viessmann VITORONDENS 200-T BR2A577',
    potencia: 'aprox. 20 kW',
    eficiencia: 'A+',
    area: 'Hasta 150 m²',
    gas: 'Gasoil',
    precio: '3.367,79 €',
    imagen: 'assets/viessmann-vitorondens-200t-br2a577.jpg',
    manual: 'manuales/viessmann-vitorondens-200t-br2a577.pdf'
  },
  {
    nombre: 'Caldera a gasoleo Viessmann VITORONDENS 200-T BR2A576',
    potencia: 'aprox. 25 kW',
    eficiencia: 'A+',
    area: 'Hasta 160 m²',
    gas: 'Gasoil',
    precio: '3.672,99 €',
    imagen: 'assets/viessmann-vitorondens-200t-br2a576.jpg',
    manual: 'manuales/viessmann-vitorondens-200t-br2a576.pdf'
  },
    // --- Aerotermia ---
     {
    nombre: 'Viessmann VITOCAL 100-S Bibloc AWB-M 101.A12',
    potencia: '11.5-7.4 kW',
    eficiencia: 'A+',
    area: 'Hasta 150 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '6.311,34 €',
    imagen: 'assets/viessmann-vitocal-100s-awb-m-101a12.jpg',
    manual: 'manuales/viessmann-vitocal-100s-awb-m-101a12.pdf'
  },
  {
    nombre: 'Viessmann VITOCAL 100-S Bibloc AWB-M-E 101.A14',
    potencia: '13.5-8.1 kW',
    eficiencia: 'A+',
    area: 'Hasta 170 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '6.938,24 €',
    imagen: 'assets/viessmann-vitocal-100s-awb-m-e-101a14.jpg',
    manual: 'manuales/viessmann-vitocal-100s-awb-m-e-101a14.pdf'
  },
  {
    nombre: 'Viessmann VITOCAL 100-S Bibloc AWB-M 101.A16',
    potencia: '15.3-8.7 kW',
    eficiencia: 'A+',
    area: 'Hasta 180 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '7.340,73 €',
    imagen: 'assets/viessmann-vitocal-100s-awb-m-101a16.jpg',
    manual: 'manuales/viessmann-vitocal-100s-awb-m-101a16.pdf'
  },
  {
    nombre: 'Viessmann VITOCAL 100-S Bibloc AWB-M-E-AC 101.A14',
    potencia: '13.5-8.1 kW',
    eficiencia: 'A+',
    area: 'Hasta 170 m²',
    tipo: 'Bibloc (unidad interior + exterior)',
    precio: '7.362,80 €',
    imagen: 'assets/viessmann-vitocal-100s-awb-m-e-ac-101a14.jpg',
    manual: 'manuales/viessmann-vitocal-100s-awb-m-e-ac-101a14.pdf'
  }
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
