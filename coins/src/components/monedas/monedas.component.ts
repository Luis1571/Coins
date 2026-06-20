import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-monedas",
  templateUrl: "./monedas.component.html",
  styleUrls: ["./monedas.component.css"],
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
})
export class MonedasComponent {
  searchPais: string = "";

  monedas = [
    {
      pais: "Corea del Sur",
      denominacion: "100 won",
      periodoDeEmision: "1970-1982",
      leyendaAnverso: "한국은행 (Banco de Corea)",
      leyendaReverso: "100 원",
      disenoReverso: "Denominación en numerales sobre fecha dentro de diseño circular",
    },
    {
      pais: "Egipto",
      denominacion: "5 piastres",
      periodoDeEmision: "1984",
      leyendaAnverso: "جمهورية مصر العربية / 5 قروش / 1404-1984",
      leyendaReverso: null,
      disenoReverso: "Tres pirámides de Giza",
    },
    {
      pais: "Francia",
      denominacion: "1 franco",
      periodoDeEmision: "1941",
      leyendaAnverso: "REPUBLIQUE FRANÇAISE",
      leyendaReverso: "LIBERTÉ – ÉGALITÉ – FRATERNITÉ",
      disenoReverso: "Denominación y fecha entre dos cuernos de la abundancia",
    },
    {
      pais: "Francia",
      denominacion: "5 francos",
      periodoDeEmision: "1945",
      leyendaAnverso: "REPUBLIQUE FRANÇAISE",
      leyendaReverso: "5 FRANCS",
      disenoReverso: null,
    },
    {
      pais: "Francia",
      denominacion: "5 centimes",
      periodoDeEmision: "1966-2001",
      leyendaAnverso: "REPUBLIQUE FRANÇAISE",
      leyendaReverso: "5 CENTIMES",
      disenoReverso: "Rama de olivo y espigas con valor y fecha",
    },
    {
      pais: "Francia",
      denominacion: "1/2 franc",
      periodoDeEmision: "1965-2001",
      leyendaAnverso: "REPUBLIQUE FRANÇAISE",
      leyendaReverso: "1/2 FRANC / LIBERTÉ ÉGALITÉ FRATERNITÉ",
      disenoReverso: "Rama de olivo y valor 1/2 FRANC bajo diseño La Semeuse",
    },
    {
      pais: "Italia",
      denominacion: "10 lire",
      periodoDeEmision: "1951-2001",
      leyendaAnverso: "REPVBBLICA ITALIANA",
      leyendaReverso: "10 LIRE",
      disenoReverso: "Dos espigas de trigo que enmarcan el valor",
    },
    {
      pais: "Italia",
      denominacion: "50 lire",
      periodoDeEmision: "1954-1989",
      leyendaAnverso: "REPVBBLICA ITALIANA",
      leyendaReverso: "L.50",
      disenoReverso: "El dios Vulcano golpeando el hierro sobre un yunque",
    },
    {
      pais: "Jordania",
      denominacion: "1 fils",
      periodoDeEmision: "1978-1985",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: null,
    },
    {
      pais: "Turquía",
      denominacion: "1 lira",
      periodoDeEmision: "2009-2022",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: "Serie moderna de circulación, diseño nacional de Turquía",
    },
    {
      pais: "USA",
      denominacion: "1/4 dolar",
      periodoDeEmision: "1965-1998",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: "Moneda de 1/4 dolar estadounidense, serie 1965-1998",
    },
    {
      pais: "Venezuela",
      denominacion: "1 bolivar",
      periodoDeEmision: "2007-2009",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: null,
    },
    {
      pais: "México",
      denominacion: "5 pesos",
      periodoDeEmision: "1997-2025",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: null,
    },
    {
      pais: "México",
      denominacion: "10 pesos",
      periodoDeEmision: "1997-2025",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: null,
    },
    {
      pais: "México",
      denominacion: "20 pesos",
      periodoDeEmision: "1985-1990",
      leyendaAnverso: null,
      leyendaReverso: null,
      disenoReverso: null,
    },
    {
      pais: "Portugal",
      denominacion: "2.5 escudos",
      periodoDeEmision: "1963-1985",
      leyendaAnverso: "REPÚBLICA PORTUGUESA + [año]",
      leyendaReverso: "2$50",
      disenoReverso: "Carabela portuguesa navegando a la derecha",
    },
    {
      pais: "Portugal",
      denominacion: "5 escudos",
      periodoDeEmision: "1963-1986",
      leyendaAnverso: "REPUBLICA PORTUGUESA + [año]",
      leyendaReverso: "5$00",
      disenoReverso: "Carabela portuguesa navegando a la derecha",
    },
    {
      pais: "Portugal",
      denominacion: "20 escudos",
      periodoDeEmision: "1986-2001",
      leyendaAnverso: "REPUBLICA PORTUGUESA 20 ESCUDOS",
      leyendaReverso: null,
      disenoReverso: "Rosa de los vientos de dieciséis puntas con la cruz de la Orden de Cristo",
    },
    {
      pais: "Baréin",
      denominacion: "10 fils",
      periodoDeEmision: "1991-2000",
      leyendaAnverso: "دولة البحرين / STATE OF BAHRAIN",
      leyendaReverso: "10 فلس",
      disenoReverso: "Valor 10 fils inscrito en árabe dentro de marco circular",
    },
  ];

  get monedasFiltradas() {
    if (!this.searchPais) {
      return this.monedas;
    }
    const q = this.searchPais.toLowerCase();
    return this.monedas.filter(
      (m) =>
        m.pais.toLowerCase().includes(q) ||
        m.denominacion.toLowerCase().includes(q) ||
        m.periodoDeEmision.includes(q),
    );
  }

  private countrySlugs: Record<string, string> = {
    "Corea del Sur": "south-korea",
    Egipto: "egypt",
    Francia: "france",
    Italia: "italy",
    Jordania: "jordan",
    Turquía: "turkey",
    USA: "usa",
    Venezuela: "venezuela",
    México: "mexico",
    Portugal: "portugal",
    Baréin: "bahrain",
  };

  private denomMap: Record<string, string> = {
    franco: "franc",
    francos: "francs",
    dolar: "dollar",
  };

  getCoinUrl(moneda: (typeof this.monedas)[number]): string {
    const pais = this.countrySlugs[moneda.pais] ?? moneda.pais;
    let denom = moneda.denominacion.toLowerCase();
    for (const [es, en] of Object.entries(this.denomMap)) {
      denom = denom.replace(es, en);
    }
    denom = denom
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\/.]+/g, "-")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return `https://es.ucoin.net/coin/${pais}-${denom}-${moneda.periodoDeEmision}/`;
  }
}
