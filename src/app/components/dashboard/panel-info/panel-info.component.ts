import { Component, OnInit } from '@angular/core';
import { MarshallService } from 'src/app/services/marshall.service';

@Component({
  selector: 'app-panel-info',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.css']
})
export class PanelInfoComponent implements OnInit {

  //precioTotal: number = Math.round(this._marshalService.precioTotal);

  constructor(public _marshalService: MarshallService) { }

  ngOnInit(): void {
 
  
  }

}
