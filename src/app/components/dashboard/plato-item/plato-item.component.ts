import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { MarshallService } from 'src/app/services/marshall.service';

@Component({
  selector: 'app-plato-item',
  templateUrl: './plato-item.component.html',
  styleUrls: ['./plato-item.component.css']
})
export class PlatoItemComponent implements OnInit {

  @Input() plato: any;
  @Input() isInMisPlatos: boolean = false;
  constructor(private router: Router, private marshallService: MarshallService) { }

  ngOnInit(): void {
  }

  agregarPlato(plato: Item): void{

    this.marshallService.addPlatoService(plato);
  }

  eliminarPlato(plato: Item): void{

    this.marshallService.removePlatoService(plato);

  }

}
