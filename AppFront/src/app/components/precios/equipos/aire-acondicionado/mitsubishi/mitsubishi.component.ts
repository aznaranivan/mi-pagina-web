import { Component } from '@angular/core';

@Component({
  selector: 'app-mitsubishi',
  standalone: false,
  templateUrl: './mitsubishi.component.html',
  styleUrls: ['./mitsubishi.component.css']
})
export class MitsubishiComponent {
  equipos = [
    {
    nombre: "Mitsubishi MSZ-HR25VF",
    potencia: "2,5 kW (frío) / 3,2 kW (calor)",
    eficiencia: "A++",
    area: "Hasta 25 m²",
    gas: "R-32",
    precio: "545,95 €",
    imagen: "assets/msz-hr25vf.jpg",
    manual: "manuales/msz-hr25vf.pdf"
  },
  {
    nombre: "Mitsubishi MSZ-HR35VF",
    potencia: "3,5 kW (frío) / 4,0 kW (calor)",
    eficiencia: "A++",
    area: "Hasta 35 m²",
    gas: "R-32",
    precio: "582,55 €",
    imagen: "assets/msz-hr35vf.jpg",
    manual: "manuales/msz-hr35vf.pdf"
  },
  {
    nombre: "Mitsubishi MSZ-HR50VF",
    potencia: "5,0 kW (frío) / 5,8 kW (calor)",
    eficiencia: "A++",
    area: "Hasta 50 m²",
    gas: "R-32",
    precio: "1.031,36 €",
    imagen: "assets/msz-hr50vf.jpg",
    manual: "manuales/msz-hr50vf.pdf"
  },
  {
    nombre: "Mitsubishi MSZ-EF35VG",
    potencia: "3,5 kW (frío) / 4,0 kW (calor)",
    eficiencia: "A++",
    area: "Hasta 35 m²",
    gas: "R-32",
    precio: "1.071,79 €",
    imagen: "assets/msz-ef35vg.jpg",
    manual: "manuales/msz-ef35vg.pdf"
  },
  {
    nombre: "Mitsubishi MSZ-LN25VG",
    potencia: "2,5 kW (frío) / 3,2 kW (calor)",
    eficiencia: "A+++",
    area: "Hasta 25 m²",
    gas: "R-32",
    precio: "1.288,80 €",
    imagen: "assets/msz-ln25vg.jpg",
    manual: "manuales/msz-ln25vg.pdf"
  },
  {
    nombre: "Mitsubishi MSZ-AP50VG",
    potencia: "5,0 kW (frío) / 6,0 kW (calor)",
    eficiencia: "A++",
    area: "Hasta 50 m²",
    gas: "R-32",
    precio: "1.679,00 €",
    imagen: "assets/msz-ap50vg.jpg",
    manual: "manuales/msz-ap50vg.pdf"
  },
  {
    nombre: "Mitsubishi MSZ-AP60VG",
    potencia: "6,0 kW (frío) / 6,8 kW (calor)",
    eficiencia: "A++",
    area: "Hasta 60 m²",
    gas: "R-32",
    precio: "1.906,09 €",
    imagen: "assets/msz-ap60vg.jpg",
    manual: "manuales/msz-ap60vg.pdf"
  },
  {
    nombre: "Mitsubishi Electric MSZ-LN60VGB",
    potencia: "6 kW (frío) / 7 kW (calor)",
    eficiencia: "A++",
    area: "Hasta 60 m²",
    gas: "R-32",
    precio: "2.292,95 €",
    imagen: "assets/msz-ap80vg.jpg",
    manual: "manuales/msz-ap80vg.pdf"
  },
  {
    nombre: "Mitsubishi MSZ-AP71VGK",
    potencia: "7,1 kW (frío) / 8,0 kW (calor)",
    eficiencia: "A++",
    area: "Hasta 70 m²",
    gas: "R-32",
    precio: "2.549,00 €",
    imagen: "assets/msz-ap71vg.jpg",
    manual: "manuales/msz-ap71vg.pdf"
  }
  ];

  verDetalles(equipo: any) {
    alert(`Detalles del equipo:\n${equipo.nombre}\nPotencia: ${equipo.potencia}\nEficiencia: ${equipo.eficiencia}\nÁrea: ${equipo.area}\nGas: ${equipo.gas}\nPrecio: ${equipo.precio}`);
  }

  descargarManual(equipo: any) {
    window.open(equipo.manual, '_blank');
  }
}
