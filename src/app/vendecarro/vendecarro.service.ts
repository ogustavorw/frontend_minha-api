import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vendecarro } from './vendecarro.model';

@Injectable({
  providedIn: 'root',
})
export class VendecarroService {
  private apiURL = 'http://localhost:3000/vendecarro';

  constructor(private http: HttpClient) {}

  listarVendecarro(): Observable<vendecarro[]> {
    return this.http.get<vendecarro[]>(this.apiURL);
  }

  cadastrarVendecarro(vendecarro: vendecarro): Observable<vendecarro> {
    return this.http.post<vendecarro>(this.apiURL, vendecarro);
  }

  buscarVendecarro(id: number): Observable<vendecarro> {
    return this.http.get<vendecarro>(`${this.apiURL}/${id}`)
  }

  atualizarVendecarro(
    id: number,
  vendecarro:vendecarro): Observable<vendecarro> {
    return this.http.patch<vendecarro>(`${this.apiURL}/${id}`, vendecarro)
  }
  deletarVendecarro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`)
  }
}