import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-detalles-item',
  templateUrl: './detalles-item.component.html',
  styleUrls: ['./detalles-item.component.css']
})
export class DetallesItemComponent implements OnInit {

  constructor(private _platoService: PlatosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  plato!: Item;
  loading: boolean = false;

  ngOnInit(): void {

    //console.log(this.activatedRoute);

    let id: any = this.activatedRoute.snapshot.paramMap.get("id"); // Para usar el dato que viene por parámetro en la url

    this.spinnerloading();

    this._platoService.detallesPlato(id).subscribe((data)=>{
      
      //console.log(data);
      
      this.plato = data;

      console.log(` Nombre del plato ${this.plato.title} `);
    
    });

  }

  spinnerloading(): void{

    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
    }, 2500);

    
  }



}
