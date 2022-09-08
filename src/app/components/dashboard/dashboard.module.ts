import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuscadorComponent } from './buscador/buscador.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PlatoItemComponent } from './plato-item/plato-item.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    BuscadorComponent,
    PlatoItemComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
