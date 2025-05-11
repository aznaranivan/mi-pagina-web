import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  standalone: false,
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  mostrarMensaje = false;
  resumen: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const datosResumen = localStorage.getItem('resumenPago');
    if (datosResumen) {
      this.resumen = JSON.parse(datosResumen);
    }

    setTimeout(() => {
      this.mostrarMensaje = true;
      this.lanzarConfetti();

      setTimeout(() => {
        localStorage.setItem('acceso', 'invitado');
        this.router.navigate(['/acceso']);
      }, 3000);
    }, 3000);
  }

  lanzarConfetti() {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.3 },
      colors: ['#8418aa', '#ffcc00', '#4caf50']
    });
  }

  generarPDF() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setTextColor('#8418aa');
    doc.text('Comprobante de Pago', 20, 20);

    doc.setFontSize(12);
    doc.setTextColor('#000000');

    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 30);
    doc.text(`Nombre del plan: ${this.resumen?.nombre}`, 20, 45);
    doc.text(`Precio mensual: ${this.resumen?.precio}`, 20, 55);
    doc.text(`Cuota de alta: ${this.resumen?.alta}`, 20, 65);

    doc.text(`Nombre: ${this.resumen?.nombreUsuario}`, 20, 80);
    doc.text(`Apellido: ${this.resumen?.apellidos}`, 20, 90);
    doc.text(`Correo: ${this.resumen?.email}`, 20, 100);
    doc.text(`Sexo: ${this.resumen?.sexo}`, 20, 110);

    doc.text('Gracias por tu compra.', 20, 130);

    doc.save('comprobante-pago.pdf');
  }
}
