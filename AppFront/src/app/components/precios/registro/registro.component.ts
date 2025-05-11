import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  standalone: false,
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre = '';
  apellidos = '';
  correo = '';
  contrasena = '';
  sexo = '';
  plan = '';

  mostrarErrores = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.plan = this.route.snapshot.queryParams['plan'] || 'desconocido';
  }

  get emailValido(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correo);
  }

  get contrasenaValida(): boolean {
    return (
      /[A-Z]/.test(this.contrasena) &&
      /[a-zA-Z]/.test(this.contrasena) &&
      /\d/.test(this.contrasena)
    );
  }

  continuar() {
    this.mostrarErrores = true;

    if (
      !this.nombre.trim() ||
      !this.apellidos.trim() ||
      !this.emailValido ||
      !this.contrasenaValida ||
      !this.sexo
    ) {
      return;
    }

    const usuario = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      correo: this.correo,
      contrasena: '*'.repeat(this.contrasena.length),
      sexo: this.sexo,
      plan: this.plan
    };

    localStorage.setItem('registroUsuario', JSON.stringify(usuario));
    localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));

    this.router.navigate(['/pago'], { queryParams: { plan: this.plan } });
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
