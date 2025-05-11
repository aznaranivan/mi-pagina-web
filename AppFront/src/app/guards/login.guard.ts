import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const loginGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token_usuarios');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    // Aquí opcionalmente puedes verificar el rol u otras propiedades del payload
  } catch (e) {
    // Si hay error al decodificar el token, se puede redirigir también
    router.navigate(['/login']);
    return false;
  }

  return true;
}