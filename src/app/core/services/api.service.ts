import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //precisa ser colocado em um appsettings da vida idealmente
  private baseUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient) {}

  //GET
  ////get sem parametros
  get<T>(controller: string, action: string): Observable<T>;
  ////get com parametros
  get<T>(controller: string, action: string, params: any): Observable<T>;
  ////implementacao
  get<T>(controller: string, firstParam?: string | any, secondParam?: any): Observable<T> {
    let action: string | undefined;
    let params: any | undefined;

    if (typeof firstParam === 'string') {
      action = firstParam;
      params = secondParam;
    } else {
      params = firstParam;
    }

    const url = this.buildUrl(controller, action);
    const httpParams = this.buildParams(params);
    return this.http.get<T>(url, { params: httpParams });
  }

  //POST
  post<T>(controller: string, action: string, body: any): Observable<T> {
    const url = this.buildUrl(controller, action);
    return this.http.post<T>(url, body);
  }

  //PUT
  put<T>(controller: string, action: string, body: any): Observable<T> {
    const url = this.buildUrl(controller, action);
    return this.http.put<T>(url, body);
  }

  //DELETE
  delete<T>(controller: string, id: string | number): Observable<T> {
    const url = id ? `${this.buildUrl(controller)}/${id}` : this.buildUrl(controller);
    return this.http.delete<T>(url);
  }

  //HELPERS
  private buildUrl(controller: string, action?: string): string {
    return action ? `${this.baseUrl}/${controller}/${action}` : `${this.baseUrl}/${controller}`;
  }

  private buildParams(params: any): HttpParams {
    return new HttpParams({
      fromObject: params || {},
    });
  }
}
