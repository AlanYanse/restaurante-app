import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class MarshallService {

  misPlatos: Item[] = []

  // Propiedades para el componente de información

  cantVeganos: number = 0;
  noVegan: number = 0;
  precioTotal: number = 0;
  promedioPreparacion: number = 0;
  promedioHealthScore: number = 0;

  constructor() { }

  // Métodos que realiza el servicio de Marshall

  addPlatoService(plato: Item){

    if(this.misPlatos.length < 4 && this.validarTipoPlato(plato)){

      // Se va a agregar al array de misPlatos
      this.misPlatos.push(plato);

      this.calcularAcumulados();
    
    }else{

      // Mensaje de error
    }

  }

  validarTipoPlato(plato: Item): boolean {
    
    if (plato.vegan) {
      if (this.cantVeganos < 2) {
        return true
      }
    } else {
      if (this.noVegan < 2) {
        return true;
      }
    }
    return false;
  }


  calcularAcumulados(): void {
    
    this.precioTotal = 0;
    this.promedioHealthScore = 0;
    this.promedioPreparacion = 0;

    this.misPlatos.forEach((plato: Item) => {
      this.precioTotal += plato.pricePerServing;
      this.promedioHealthScore += plato.healthScore;
      this.promedioPreparacion += plato.readyInMinutes;
    });

    let cantidadPlatos = this.misPlatos.length;
    this.promedioHealthScore = this.promedioHealthScore / cantidadPlatos;
    this.promedioPreparacion = this.promedioPreparacion / cantidadPlatos;
    this.calcularVeganos();
  }

  
  calcularVeganos(): void {
    this.cantVeganos = 0;
    this.noVegan = 0;
    this.misPlatos.forEach((plato: any) => {
      if (plato.vegan) {
        this.cantVeganos++
      } else {
        this.noVegan++;
      }
    })
  }




}
