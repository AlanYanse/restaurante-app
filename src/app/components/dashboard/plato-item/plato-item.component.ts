import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { MarshallService } from 'src/app/services/marshall.service';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-plato-item',
  templateUrl: './plato-item.component.html',
  styleUrls: ['./plato-item.component.css']
})
export class PlatoItemComponent implements OnInit {

  @Input() plato: any;
  @Input() isInMisPlatos: boolean = false;
  constructor(private router: Router, private marshallService: MarshallService, private _platoService: PlatosService) { }

  ngOnInit(): void {
  }

  agregarPlato(plato: Item): void{

    this.marshallService.addPlatoService(plato);
  }

  
  eliminarPlato(plato: Item): void{

    this.marshallService.removePlatoService(plato);

  }


  verDetalles(id: any) {
    
    this.router.navigate([`dashboard/detalles/${id}`]);
    /*
    this._platoService.detallesPlato(id).subscribe((data)=>{
      console.log(data);
    });
    */

    console.log(`este es el id del plato: ${id}`);
  
  }






}
