import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  apiUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  obtenerPlatos(busqueda: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}recipes/complexSearch?apiKey=${this.apiKey}&query=${busqueda}&addRecipeInformation=true&addRecipeNutrition=true`);
  }
}
