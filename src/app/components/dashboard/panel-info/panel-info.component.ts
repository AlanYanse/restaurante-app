import { Component, OnInit } from '@angular/core';
import { MarshallService } from 'src/app/services/marshall.service';

@Component({
  selector: 'app-panel-info',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.css']
})
export class PanelInfoComponent implements OnInit {

  cantVeganos: number = 0;
  precioTotal: number = 0;
  promedioPreparacion: number = 0;
  promedioHealthScore: Number = 0;

  constructor(private _marshalService: MarshallService) { }

  ngOnInit(): void {

    this.cantVeganos = this._marshalService.getCantVeganos();
    this.precioTotal = this._marshalService.getPrecioTotal();
    this.promedioPreparacion = this._marshalService.getPromedioPreparacion();
    this.promedioHealthScore = this._marshalService.getPromedioHealthScore();
  
  }

}
