import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private api = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<any> {
    return this.http.get<any>(`${this.api}/clientes`)
  }

  adicionar(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.api}/clientes`, cliente);
  }

  deletar(cliente: any): Observable<any> {
    return this.http.delete<any>(`${this.api}/clientes/delete/${cliente.id}`);
  }
}
