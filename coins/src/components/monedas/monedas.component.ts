import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-monedas",
  templateUrl: "./monedas.component.html",
  styleUrls: ["./monedas.component.css"],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class MonedasComponent {
  searchPais: string = ""; // variable para el input

  monedas = [
    {
      pais: "Corea del Sur",
      denominacion: "100 won",
      periodoDeEmision: "1970‑1982",
      leyendaAnverso: "한국은행 (Banco de Corea)",
      leyendaReverso: "100 원",
      disenoReverso: "Denominación en numerales sobre fecha dentro de diseño circular",
    },
    {
      pais: "Egipto",
      denominacion: "5 piastres",
      periodoDeEmision: "1984",
      leyendaAnverso: "جمهورية مصر العربية / ٥ قروش / ١٤٠٤‑١٩٨٤",
      leyendaReverso: null,
      disenoReverso: "Tres pirámides de Giza",
    },
    {
      pais: "Francia",
      denominacion: "1 franco",
      periodoDeEmision: "1941",
      leyendaAnverso: "REPUBLIQUE FRANÇAISE",
      leyendaReverso: "LIBERTÉ – ÉGALITÉ – FRATERNITÉ",
      disenoReverso: "Denominación y fecha entre dos cuernos de la abundancia",
    },
    {
      pais: "Francia",
      denominacion: "5 francos",
      periodoDeEmision: "1945",
      leyendaAnverso: "REPUBLIQUE FRANÇAISE",
      leyendaReverso: "5 FRANCS",
      disenoReverso: null,
    },
    {
      pais: "Francia",
      denominacion: "5 centimes",
      periodoDeEmision: "1966‑2001",
      leyendaAnverso: "REPUBLIQUE FRANÇAISE",
      leyendaReverso: "5 CENTIMES",
      disenoReverso: "Rama de olivo y espigas con valor y fecha",
    },
    {
      pais: "Francia",
      denominacion: "½ franc",
      periodoDeEmision: "1965‑2001",
      leyendaAnverso: "REPUBLIQUE FRANÇAISE",
      leyendaReverso: "½ FRANC / LIBERTÉ ÉGALITÉ FRATERNITÉ",
      disenoReverso: "Rama de olivo y valor ½ FRANC bajo diseño La Semeuse",
    },
    {
      pais: "Italia",
      denominacion: "10 lire",
      periodoDeEmision: "1951‑2001",
      leyendaAnverso: "REPVBBLICA ITALIANA",
      leyendaReverso: "10 LIRE",
      disenoReverso: "Dos espigas de trigo que enmarcan el valor",
    },
    {
      pais: "Italia",
      denominacion: "50 lire",
      periodoDeEmision: "1954‑1989",
      leyendaAnverso: "REPVBBLICA ITALIANA",
      leyendaReverso: "L.50",
      disenoReverso: "El dios Vulcano golpeando el hierro sobre un yunque",
    },
    {
      pais: "Jordania",
      denominacion: "1 fils",
      periodoDeEmision: "1978‑1985",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: null,
    },
    {
      pais: "Turquía",
      denominacion: "1 lira",
      periodoDeEmision: "2009‑2022",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: "Serie moderna de circulación, diseño nacional de Turquía",
    },
    {
      pais: "USA",
      denominacion: "¼ dólar",
      periodoDeEmision: "1965‑1998",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: "Moneda de ¼ dólar estadounidense, serie 1965‑1998",
    },
    {
      pais: "Venezuela",
      denominacion: "1 bolívar",
      periodoDeEmision: "2007‑2009",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: null,
    },
    {
      pais: "México",
      denominacion: "5 pesos",
      periodoDeEmision: "1997‑2025",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: null,
    },
    {
      pais: "México",
      denominacion: "10 pesos",
      periodoDeEmision: "1997‑2025",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: null,
    },
    {
      pais: "México",
      denominacion: "20 pesos",
      periodoDeEmision: "1985‑1990",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: null,
    },
    {
      pais: "Portugal",
      denominacion: "2,5 escudos",
      periodoDeEmision: "1963‑1985",
      leyendaAnverso: "REPÚBLICA PORTUGUESA + [año]",
      leyendaReverso: "2$50",
      disenoReverso: "Carabela portuguesa navegando a la derecha",
    },
    {
      pais: "Portugal",
      denominacion: "5 escudos",
      periodoDeEmision: "1963‑1986",
      leyendaAnverso: "REPUBLICA PORTUGUESA + [año]",
      leyendaReverso: "5$00",
      disenoReverso: "Carabela portuguesa navegando a la derecha",
    },
    {
      pais: "Portugal",
      denominacion: "20 escudos",
      periodoDeEmision: "1986‑2001",
      leyendaAnverso: "REPUBLICA PORTUGUESA 20 ESCUDOS",
      leyendaReverso: null,
      disenoReverso: "Rosa de los vientos de dieciséis puntas con la cruz de la Orden de Cristo",
    },
    {
      pais: "Baréin",
      denominacion: "10 fils",
      periodoDeEmision: "1991‑2000",
      leyendaAnverso: "دولة البحرين / STATE OF BAHRAIN",
      leyendaReverso: "10 فلس",
      disenoReverso: "Valor 10 fils inscrito en árabe dentro de marco circular",
    },
  ];
  // Función que filtra monedas según el input
  get monedasFiltradas() {
    if (!this.searchPais) {
      return this.monedas;
    }
    return this.monedas.filter((m) => m.pais.toLowerCase().includes(this.searchPais.toLowerCase()));
  }
}
