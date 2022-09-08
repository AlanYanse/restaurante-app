import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetallesItemComponent } from './detalles-item/detalles-item.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: DashboardComponent, children: [
    {path: "", component: HomeComponent},
    {path: "buscador", component: BuscadorComponent},
    {path: "detalles/:id", component: DetallesItemComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
