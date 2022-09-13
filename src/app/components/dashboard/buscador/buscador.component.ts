import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';
import { Item } from 'src/app/interfaces/item';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  busqueda: string = "";
  listaPlatos: Item[] = [];
  loading: boolean = false;

  constructor(private _platosService: PlatosService) { }

  ngOnInit(): void {

  }

  spinnerloading(): void{

    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
    }, 2500);

    
  }

  buscarPlatos():void{
    
    this.spinnerloading();
    console.log(this.busqueda);
    this.validacion(this.busqueda);
    this.busqueda = ""; // Para vaciar el input
    
  }

  validacion(valor: string): void{


    if(valor.length < 2){
      
      alert("La búsqueda debe contener al menos 2 caracteres");
      this.busqueda = "";
    
    }else{

      // Se utiliza el servicio que consume la api
      
      this._platosService.obtenerPlatos(this.busqueda).subscribe((data) => {
      
        this.listaPlatos = data.results;        
      
      });
      
    }
  }


  



}
