import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dieta-volumen',
  templateUrl: './dieta-volumen.component.html',
  standalone: false,
  styleUrls: ['./dieta-volumen.component.css']
})
export class DietaVolumenComponent implements OnInit {
  recetaId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.recetaId = params['receta'];
    });
  }
}
