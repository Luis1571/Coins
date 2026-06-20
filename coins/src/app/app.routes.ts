import type { Routes } from "@angular/router";
import { CreateCoinComponent } from "../components/create-coin/create-coin.component";
import { InicioComponent } from "../components/inicio/inicio.component";
import { MonedasComponent } from "../components/monedas/monedas.component";

export const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "monedas", component: MonedasComponent },
  { path: "create-coin", component: CreateCoinComponent },
];
