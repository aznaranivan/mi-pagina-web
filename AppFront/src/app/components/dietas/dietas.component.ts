import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  standalone: false,
  styleUrls: ['./dietas.component.css']
})
export class DietasComponent {
  constructor(private router: Router) {}

  verDetalle(tipo: string, recetaId: string) {
    this.router.navigate([`/components/dietas/${tipo}/dieta-${tipo}`], {
      queryParams: { receta: recetaId }
    });
  }
}