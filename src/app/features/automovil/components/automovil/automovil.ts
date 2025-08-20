import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AutomovilService } from '../../services/automovil';
import { PersonaService } from '../../../persona/services/persona';

@Component({
  selector: 'app-automovil',
  imports: [ReactiveFormsModule],
  templateUrl: './automovil.html',
  styleUrl: './automovil.scss'
})
export class Automovil {

  formBuilder = inject(FormBuilder);
  automovilForm = this.formBuilder.group({
    marca: [''],
    color: [''],
    matricula: [''],
    duenio: [''],
    id: [null],
  });
  automoviles: any []= [];
automovilService = inject(AutomovilService);


 personas: any[] = [];
  personasService = inject(PersonaService);
constructor() {
    this.getAutomovil();
    this.getPersonas();
  }
  getAutomovil() {
    this.automovilService.getAutomoviles().subscribe((data) => {
      this.automoviles = data;
    });
  }
 getPersonas() {
    this.personasService.getPersonas().subscribe((data) => {
      this.personas = data;
    });
  }
  saveAutomovil() {
    if (this.automovilForm.value.id === null) {
      this.automovilService.addAutomovil(this.automovilForm.value);
    }else {
      this.automovilService.updateAutomovil(this.automovilForm.value);
    }
 this.automovilForm.reset();
  }


  deleteAutomovil(automovilId: string) {
    this.automovilService.deleteAutomovil(automovilId);
  }
  actualizarAutomovil(automovil: any) {
    this.automovilForm.patchValue(automovil);
  }
  
}
