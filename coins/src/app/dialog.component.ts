import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: "app-dialog",
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Información</h2>
    <mat-dialog-content>
      <p>boton creado por IA</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-raised-button mat-dialog-close>Cerrar</button>
    </mat-dialog-actions>
  `,
})
export class DialogComponent {}
