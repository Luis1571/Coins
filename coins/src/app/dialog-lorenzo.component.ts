import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: "app-dialog-lorenzo",
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title style="background-color: blue; color: white; margin: -24px -24px 0 -24px; padding: 16px;">Información</h2>
    <mat-dialog-content style="color: blue;">
      <p><strong>boton hecho por Lorenzo</strong></p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-raised-button color="primary" mat-dialog-close>Cerrar</button>
    </mat-dialog-actions>
  `,
})
export class DialogLorenzoComponent {}
