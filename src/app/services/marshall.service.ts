import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MarshallService {

  private Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })

  misPlatos: Item[] = []

  // Propiedades para el componente de información
  
  cantVeganos: number = 0;
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
        //alert("Se agrego el plato");
        this.Toast.fire({
          icon: 'success',
          title: 'Se agrego el plato correctamente'
        });
        console.log(plato.vegan);
        console.log(`Cantidad acumulada de veganos ${this.cantVeganos}`);
      
      } else {
        
        //alert("No puede haber mas de 2 platos veganos");

        this.Toast.fire({
          icon: 'error',
          title: 'No puede haber mas de 2 platos veganos'
        })
        
      }
    } else {
      
      //alert("No puede haber mas de 4 platos");
      this.Toast.fire({
        icon: 'error',
        title: 'No puede pedir mas de 4 platos',
      })
      
    }
  }


  
  calcularAcumulados(): void {

    this.precioTotal = 0;
    this.promedioHealthScore = 0;
    this.promedioPreparacion = 0;
    
    this.misPlatos.forEach((plato: Item) => {
      this.precioTotal += Math.round(plato.pricePerServing);
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
    //alert("Se quito el plato");
    this.Toast.fire({
      icon: 'warning',
      title: 'Se elimino el plato correctamente'
    });
    console.log(this.precioTotal);

  }

  

}
