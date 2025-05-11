import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-informacion-usuario',
  templateUrl: './informacion.usuario.component.html',
  standalone:false,
  styleUrls: ['./informacion.usuario.component.css']
})
export class InformacionUsuarioComponent {
  datosUsuario: any;

  constructor( private router: Router ) {
    const datos = localStorage.getItem('perfilUsuario');
    this.datosUsuario = datos ? JSON.parse(datos) : null;
  }

  irAlta() {
    this.router.navigate(['/alta']);
  }

  randomQR: string = Math.random().toString(36).substring(2, 10);

}
