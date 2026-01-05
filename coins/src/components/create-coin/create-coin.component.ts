import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { form } from 'ng-signal-forms';
// import { createMonedaForm } from './interface/create-moneda.interface';

@Component({
  selector: 'app-create-coin',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create-coin.component.html',
  styleUrl: './create-coin.component.scss'
})
export class CreateCoinComponent {

  // --- ENFOQUE CON SIGNALS (Librería experimental ng-signal-forms) ---
  /*
  // Se crea un signal que contoendran los valores del formulario
  createMonedaSignals = signal<createMonedaForm>({
   pais: '',
   nombre: '',
 });
 //Pasa tu modelo de formulario al form() función para crear un árbol de campo
 createMonedaForm = form(this.createMonedaSignals);
 */

  // --- ENFOQUE STANDARD (Reactive Forms) ---
  createMonedaForm = new FormGroup({
    pais: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.createMonedaForm.valid) {
      console.log(this.createMonedaForm.value);
    }
  }
}
  