import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dieta-equilibrio',
  templateUrl: './dieta-equilibrio.component.html',
  standalone: false,
  styleUrls: ['./dieta-equilibrio.component.css']
})
export class DietaEquilibrioComponent implements OnInit {
  recetaId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.recetaId = params['receta'];
    });
  }
}
