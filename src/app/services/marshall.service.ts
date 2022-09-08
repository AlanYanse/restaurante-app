import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class MarshallService {

  misPlatos: Item[] = []

  // Propiedades para el componente de información

  cantVeganos: number = 0;
  cantNoVegan: number = 0;
  precioTotal: number = 0;
  promedioPreparacion: number = 0;
  promedioHealthScore: number = 0;

  constructor() { }

  // Métodos que realiza el servicio de Marshall

 


  addPlatoService(plato: Item): void {
    if (this.misPlatos.length < 4) {
      if (this.cantVeganos <= 2) {
        
        // Se va a agregar al array de misPlatos
        this.misPlatos.push(plato);
        this.calcularAcumulados();
        alert("Se agrego el plato");
        console.log(plato.vegan);
        console.log(`Cantidad acumulada de veganos ${this.cantVeganos}`);
        console.log(`Cantidad acumulada de NO veganos ${this.cantNoVegan}`);
      
      } else {
        
        alert("No puede haber mas de 2 platos veganos");
        
      }
    } else {
      
      alert("No puede haber mas de 4 platos");
      
    }
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
   
    this.misPlatos.forEach((plato: Item) => {
      if (plato.vegan) {
        this.cantVeganos ++;
      }
    });
  }


  removePlatoService(plato: Item): void{

    let index = this.misPlatos.indexOf(plato);
    this.misPlatos.splice(index, 1);
    this.calcularAcumulados();
    alert("Se quito el plato");

  }




}
