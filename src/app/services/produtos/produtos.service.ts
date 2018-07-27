import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError } from "rxjs/internal/operators";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private api = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<any> {
    return this.http.get<any>(`${this.api}/produtos`);
  }

  adicionar(produto: any): Observable<any> {
    return this.http.post<any>(`${this.api}/produtos`, produto);
  }

  atualizar(produto: any): Observable<any> {
    return this.http.put<any>(`${this.api}/produtos`, produto);
  }

  deletar(produto: any): Observable<any> {
    return this.http.delete<any>(`${this.api}/produtos/delete/${produto.id}`).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}