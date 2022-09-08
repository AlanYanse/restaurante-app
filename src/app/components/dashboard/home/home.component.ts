import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { MarshallService } from 'src/app/services/marshall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPlatos: Item[] = [];

  constructor(private _marshallService: MarshallService) { }

  ngOnInit(): void {
    this.listaPlatos = this._marshallService.misPlatos;
  }

}
