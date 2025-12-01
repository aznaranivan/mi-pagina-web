import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppFront';
  sidebarOpen = false;
  sidebarClosedByScroll = false;
  esInicio = false;
  mostrarCookieBanner = true;
  mostrarUneteModal = false;
  animarUnete = false;
  noPresionado = false;
  mostrarAccesoModal = false;
  tipoAccesoSeleccionado: 'invitado' | 'administrador' | null = null;

  

  correoUsuario: string = '';
  mostrarFormularioCorreo: boolean = false;

  usuario: any = null;
  imagenSexo: string = '';
  mostrarUsuario = false;

  @ViewChild('botonUnete', { static: true }) botonUnete!: ElementRef;

  constructor(public router: Router) {
    const esRecarga = !performance.getEntriesByType('navigation')
      .some((nav: any) => nav.type === 'navigate');

    if (esRecarga && location.pathname !== '/') {
      this.router.navigateByUrl('/');
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.esInicio = event.urlAfterRedirects === '/';
        this.cargarUsuario();
      }
    });
  }

 // Dentro de AppComponent
ngOnInit(): void {
  this.cargarUsuario();

}


  cargarUsuario() {
    const datos = localStorage.getItem('usuarioLogueado');
    if (datos) {
      this.usuario = JSON.parse(datos);
      this.imagenSexo = this.usuario.sexo === 'mujer'
        ? 'assets/user-female.png'
        : 'assets/user-icon.png';
    } else {
      this.usuario = null;
    }
  }

  toggleUsuario() {
    this.mostrarUsuario = !this.mostrarUsuario;
  }

  getContrasenaOculta(contrasena: string): string {
    return '*'.repeat(contrasena.length);
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    localStorage.removeItem('registroUsuario');
    localStorage.removeItem('resumenPago');
    this.usuario = null;
    this.router.navigate(['/']);
  }

  aceptarCookies() {
    this.mostrarCookieBanner = false;
    this.mostrarAccesoModal = true;
  }

  enviarCorreo() {
    const esCorreoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correoUsuario);
    if (!esCorreoValido) {
      alert('Por favor, introduce un correo válido.');
      return;
    }

    const correoDestino = 'aznaranivan41@gmail.com';
    const asunto = encodeURIComponent('Contacto desde la web');
    const body = encodeURIComponent(`Hola, mi correo es: ${this.correoUsuario}`);
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${correoDestino}&su=${asunto}&body=${body}`;

    window.open(url, '_blank');
    this.mostrarFormularioCorreo = false;
    this.correoUsuario = '';
  }

  irAInicio() {
    window.location.href = '/';
  }

  irAPlanes() {
    this.router.navigate(['/precios']).then(() => {
      setTimeout(() => {
        const preciosSection = document.querySelector('.precios-wrapper');
        if (preciosSection) {
          preciosSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  }

  confirmarAcceso() {
    if (this.tipoAccesoSeleccionado === 'invitado') {
      localStorage.setItem('acceso', 'invitado');
      this.mostrarAccesoModal = false;
    } else if (this.tipoAccesoSeleccionado === 'administrador') {
      localStorage.setItem('acceso', 'administrador');
      this.router.navigate(['/invitado-administrador']);
      this.mostrarAccesoModal = false;
    }
  }


mostrarMensajeNo() {
  this.noPresionado = true;
  setTimeout(() => {
    this.confirmarUnete('no');
  }, 1500); // espera 2 segundos antes de navegar
}

confirmarUnete(opcion: 'si' | 'no') {
  this.mostrarUneteModal = false;
  this.noPresionado = false;
  this.router.navigate(['/precios']).then(() => {
    setTimeout(() => {
      const section = document.querySelector('.precios-wrapper');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  });
}



  adelante() {
  const boton = document.querySelector('.join-button') as HTMLElement;
  if (boton) {
    boton.classList.add('animar-boton');

    setTimeout(() => {
      boton.classList.remove('animar-boton');
    }, 500); // tiempo que dura la animación
  }
}

/* ---------- FAQ: datos y control del acordeón ---------- */
// ---------- FAQ: datos y control del acordeón ----------
openFaqIndex: number | null = null;

toggleFaq(index: number) {
  this.openFaqIndex = this.openFaqIndex === index ? null : index;
}

isFaqOpen(index: number): boolean {
  return this.openFaqIndex === index;
}


}
