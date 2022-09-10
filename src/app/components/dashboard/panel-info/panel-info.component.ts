import { Component, OnInit } from '@angular/core';
import { MarshallService } from 'src/app/services/marshall.service';

@Component({
  selector: 'app-panel-info',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.css']
})
export class PanelInfoComponent implements OnInit {


  constructor(public _marshalService: MarshallService) { }

  ngOnInit(): void {
 
  
  }

}
