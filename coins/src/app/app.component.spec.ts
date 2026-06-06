import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FormsModule, MatButtonModule],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have the 'coins' title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("coins");
  });

  it("should have searchPais initialized as empty string", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.searchPais).toEqual("");
  });

  it("should have the monedas array populated", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.monedas.length).toBeGreaterThan(0);
  });

  it("should return all monedas when searchPais is empty", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.searchPais = "";
    expect(app.monedasFiltradas.length).toBe(app.monedas.length);
  });

  it("should filter monedas by country when searchPais is set", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.searchPais = "Francia";
    const filtered = app.monedasFiltradas;
    expect(filtered.length).toBe(4);
    filtered.forEach((moneda) => {
      expect(moneda.pais.toLowerCase()).toContain("francia");
    });
  });

  it("should be case insensitive when filtering", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.searchPais = "corea";
    const filtered = app.monedasFiltradas;
    expect(filtered.length).toBe(1);
    expect(filtered[0].pais).toBe("Corea del Sur");
  });

  it("should return empty array when no coins match", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.searchPais = "paisinexistente";
    expect(app.monedasFiltradas.length).toBe(0);
  });

  it("should render the coin image", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img[alt="Moneda"]');
    expect(img).toBeTruthy();
  });

  it("should render the search input", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input#search');
    expect(input).toBeTruthy();
  });

  it("should render the buttons", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll("button");
    expect(buttons.length).toBe(2);
  });

  it("should render the Boton IA button", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll("button");
    const botonIA = Array.from(buttons).find(b => b.textContent?.includes("Boton IA"));
    expect(botonIA).toBeTruthy();
  });

  it("should render the table with correct headers", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const headers = compiled.querySelectorAll("th");
    expect(headers.length).toBe(6);
    expect(headers[0].textContent).toContain("País");
    expect(headers[1].textContent).toContain("Denominación");
  });

  it("should render all coins in the table initially", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll("tbody tr");
    const app = fixture.componentInstance;
    expect(rows.length).toBe(app.monedas.length);
  });
});
