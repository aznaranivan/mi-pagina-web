import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  standalone: false,
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent {
  constructor(private router: Router) {}

  irARegistro(plan: string) {
    this.router.navigate(['/registro'], { queryParams: { plan } });
  }
}