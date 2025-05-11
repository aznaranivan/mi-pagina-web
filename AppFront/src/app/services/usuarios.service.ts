import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  httpClient = inject(HttpClient);

  baseUrl = 'http://localhost:3000/api/usuarios';

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl)
    );
  }

  getById(usuarioId: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${usuarioId}`)
    );
  }

  create(formValues: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, formValues)
    );
  }

  update(usuarioId: string, formValues: any) {
    return firstValueFrom(
      this.httpClient.put(`${this.baseUrl}/${usuarioId}`, formValues)
    );
  }

  deleteById(usuarioId: string) {
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/${usuarioId}`)
    );
  }

  // createHeaders() {
  //   return {
  //     headers: new HttpHeaders({
  //       'Authorization' : localStorage.getItem('token_usuarios')!
  //     })
  //   }
  // }
}
