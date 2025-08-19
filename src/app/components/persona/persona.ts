import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from '../../services/persona';

@Component({
  selector: 'app-persona',
  imports: [ReactiveFormsModule],
  templateUrl: './persona.html',
  styleUrl: './persona.scss'
})
export class Persona {

formBuilder = inject(FormBuilder);
  personaForm = this.formBuilder.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    id: [null],
  });
  personas: any[] = [];
  personasService = inject(PersonaService);

  constructor() {
    this.getPersonas();
  }
  getPersonas() {
    this.personasService.getPersonas().subscribe((data) => {
      this.personas = data;
    });
  }

  savePersona() {
    if (this.personaForm.value.id === null) {
      this.personasService.addPersona(this.personaForm.value);
    }else {
      this.personasService.updatePersona(this.personaForm.value);
    }
 this.personaForm.reset();
  }

  
  deletePersona(personaId: string) {
    this.personasService.deletePersonas(personaId);
  }
  actualizarPersona(persona: any) {
    this.personaForm.patchValue(persona);
  }
}
