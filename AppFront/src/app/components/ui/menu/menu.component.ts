import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  router = inject(Router);
  usersService = inject(UsersService);
  currentRoute: string = '';

  constructor(private route: ActivatedRoute) {
    // Obtener la ruta actual para condicionar la visualización de los botones
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  onClickLogout() {
    localStorage.removeItem('token_usuarios');
    this.router.navigate(['login']);
  }

  // Método para verificar si los botones de login y registro deben mostrarse
  shouldShowLoginRegister() {
    return false; // nunca mostrar botones de login/register en el menú
  }
}
