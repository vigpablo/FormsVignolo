import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})



export class FormularioComponent {
  contactoForm: FormGroup; 

    nombreControl= new FormControl ('', [Validators.required, Validators.minLength(3) ]);

    apellidoControl= new FormControl ('',[Validators.required, Validators.minLength(3) ]);

    emailControl= new FormControl ('',[Validators.required, Validators.minLength(3) ]);

    constructor() {
      this.contactoForm = new FormGroup({

        nombre: this.nombreControl,
        apellido: this.apellidoControl,
        email: this.emailControl,

      })
    }
   
  onSubmit(): void{
    console.log(this.contactoForm.value)
  }
}
