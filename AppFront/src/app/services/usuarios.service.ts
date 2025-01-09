import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api/usuarios';

  getAll () {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl)
    );
  }

  getById(usuarioId: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${usuarioId}`)
    );
  }

}
