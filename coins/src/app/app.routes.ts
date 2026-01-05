import type { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { CreateCoinComponent } from "../components/create-coin/create-coin.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create-coin", component: CreateCoinComponent },
];
