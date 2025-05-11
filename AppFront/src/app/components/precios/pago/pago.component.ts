import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  standalone: false,
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  plan: string = '';
  detalles: any = {
    precio: '',
    beneficios: [],
    alta: ''
  };

  // ✅ Datos del usuario
  usuario: any = null;
  imagenSexo: string = '';
  mostrarUsuario = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarDatosUsuario();
    this.cargarDetallesPlan();
  }

  cargarDatosUsuario() {
    const datos = localStorage.getItem('registroUsuario');
    if (datos) {
      this.usuario = JSON.parse(datos);
      this.imagenSexo = this.usuario.sexo === 'mujer'
        ? 'assets/user-female.png'
        : 'assets/user-icon.png';
    }
  }

  cargarDetallesPlan() {
    const usuario = this.usuario;
    if (!usuario) return;

    const clave = usuario.plan?.toLowerCase() || 'desconocido';

    const planes: any = {
      basico: {
        precio: '14,90€/mes',
        beneficios: [
          'Acceso al gimnasio de lunes a viernes',
          'Rutinas básicas',
          'Acceso limitado a zonas comunes'
        ],
        alta: 'Cuota de alta: 10€'
      },
      avanzado: {
        precio: '24,90€/mes',
        beneficios: [
          'Acceso todos los días',
          'Rutinas personalizadas',
          'Asesoramiento mensual',
          'Acceso completo a instalaciones'
        ],
        alta: 'Cuota de alta: 5€'
      },
      total: {
        precio: '34,90€/mes',
        beneficios: [
          'Acceso 24/7',
          'Rutinas y asesoramiento personalizado',
          'Seguimiento semanal',
          'Sin restricciones de instalaciones',
          'Clases incluidas'
        ],
        alta: 'Sin cuota de alta'
      }
    };

    this.plan = clave;
    this.detalles = planes[clave] || {
      precio: '',
      beneficios: [],
      alta: ''
    };
  }

  // ✅ Mostrar/Ocultar panel usuario
  toggleUsuario() {
    this.mostrarUsuario = !this.mostrarUsuario;
  }

  // ✅ Ocultar contraseña
  getContrasenaOculta(contrasena: string): string {
    return '*'.repeat(contrasena.length);
  }

  // ✅ Cerrar sesión
  cerrarSesion() {
    localStorage.removeItem('registroUsuario');
    localStorage.removeItem('usuarioLogueado');
    this.usuario = null;
    this.router.navigate(['/']);
  }

  // ✅ Ir a siguiente pantalla
  irAPagoTarjeta() {
    // Guardar también usuario como logueado
    if (this.usuario) {
      localStorage.setItem('usuarioLogueado', JSON.stringify(this.usuario));
    }

    this.router.navigate(['/tarjeta']);
  }
}
