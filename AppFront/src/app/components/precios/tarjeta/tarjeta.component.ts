import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  standalone: false,
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  email: string = '';
  emailInvalido: boolean = false;
  pais: string = 'España';

  nombre: string = '';
  apellidos: string = '';
  sexo: string = 'Otro';

  tarjeta = {
    numero: '',
    caducidad: '',
    cvc: '',
    titular: ''
  };

  detalles: any = {
    nombre: '',
    precio: '',
    alta: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarDetallesPlan();
    this.cargarDatosUsuario();
  }

  cargarDetallesPlan() {
    const datos = localStorage.getItem('registroUsuario');
    if (datos) {
      const usuario = JSON.parse(datos);
      const clave = usuario.plan?.toLowerCase() || 'desconocido';

      const planes: any = {
        basico: {
          nombre: 'Plan Básico',
          precio: '14,90€/mes',
          alta: 'Cuota de alta: 10€'
        },
        avanzado: {
          nombre: 'Plan Avanzado',
          precio: '24,90€/mes',
          alta: 'Cuota de alta: 5€'
        },
        total: {
          nombre: 'Plan Total',
          precio: '34,90€/mes',
          alta: 'Sin cuota de alta'
        }
      };

      this.detalles = planes[clave] || {
        nombre: 'Desconocido',
        precio: '',
        alta: ''
      };
    }
  }

  cargarDatosUsuario() {
    const datos = localStorage.getItem('registroUsuario');
    if (datos) {
      const usuario = JSON.parse(datos);
      this.nombre = usuario.nombre || '';
      this.apellidos = usuario.apellidos || '';
      this.sexo = usuario.sexo || 'Otro';
      this.email = usuario.correo || '';
    }
  }

  validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
    this.emailInvalido = !regex.test(this.email.trim());
  }

  onCardNumberInput(event: any) {
    let value = event.target.value.replace(/\D/g, '').substring(0, 16);
    this.tarjeta.numero = value.replace(/(.{4})/g, '$1 ').trim();
  }

  formatearCaducidad(event: any) {
    let valor = event.target.value.replace(/\D/g, '').substring(0, 4);
    if (valor.length >= 3) {
      valor = valor.slice(0, 2) + ' / ' + valor.slice(2);
    }
    this.tarjeta.caducidad = valor;
  }

  onTitularInput(event: any) {
    this.tarjeta.titular = event.target.value.toUpperCase();
  }

  finalizarPago() {
  if (
    this.emailInvalido ||
    this.tarjeta.numero.replace(/\s/g, '').length !== 16 ||
    this.tarjeta.cvc.length < 3 ||
    !this.tarjeta.titular.trim()
  ) {
    alert('Por favor, completa todos los datos correctamente.');
    return;
  }

  const datosPrevios = localStorage.getItem('registroUsuario');
  const usuario = datosPrevios ? JSON.parse(datosPrevios) : {};

  // ✅ Guardar datos del usuario para la cabecera
  const datosUsuario = {
    nombre: this.nombre,
    apellidos: this.apellidos,
    email: this.email,
    sexo: this.sexo,
    plan: this.detalles.nombre,
    contrasena: usuario.contrasena
  };
  localStorage.setItem('usuarioLogueado', JSON.stringify(datosUsuario));

  // ✅ Guardar resumen para la pantalla de carga y el PDF
  const resumen = {
    nombre: this.detalles.nombre,
    precio: this.detalles.precio,
    alta: this.detalles.alta,
    nombreUsuario: this.nombre,
    apellidos: this.apellidos,
    email: this.email,
    sexo: this.sexo
  };
  localStorage.setItem('resumenPago', JSON.stringify(resumen));

  // ✅ Redirigir a pantalla de carga
  this.router.navigate(['/procesando']);
  }

}
