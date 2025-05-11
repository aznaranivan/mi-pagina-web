import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitado-administrador',
  templateUrl: './invitado-administrador.component.html',
  standalone: false,
  styleUrls: ['./invitado-administrador.component.css']
})
export class InvitadoAdministradorComponent implements OnInit {
  tipoAcceso: 'invitado' | 'administrador' | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.tipoAcceso = localStorage.getItem('acceso') as any;
  }

  entrarComoInvitado() {
    if (this.tipoAcceso === 'invitado') {
      this.router.navigate(['/usuarios/new']);
    }
  }

  entrarComoAdministrador() {
    if (this.tipoAcceso === 'administrador') {
      this.router.navigate(['/register']);
    }
  }
}
