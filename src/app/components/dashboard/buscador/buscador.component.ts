import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  busqueda: string = "";

  constructor() { }

  ngOnInit(): void {

  }

  buscarPlatos():void{
    
    console.log(this.busqueda);
    this.validacion(this.busqueda);
    
  }

  validacion(valor: string): void{

    if(valor.length < 2){
      
      alert("La búsqueda debe contener al menos 2 caracteres");
      this.busqueda = "";
    
    }else{

      // Se utiliza el servicio que consume la api

    }
  }

}
