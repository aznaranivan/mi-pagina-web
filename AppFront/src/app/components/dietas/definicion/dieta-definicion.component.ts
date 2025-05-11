import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dieta-definicion',
  templateUrl: './dieta-definicion.component.html',
  standalone: false,
  styleUrls: ['./dieta-definicion.component.css']
})
export class DietaDefinicionComponent implements OnInit {
  recetaId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.recetaId = params['receta'];
    });
  }
}