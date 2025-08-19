import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MascotaService } from '../../services/mascota';

@Component({
  selector: 'app-mascota',
  imports: [ReactiveFormsModule],
  templateUrl: './mascota.html',
  styleUrl: './mascota.scss'
})
export class Mascota {
  formBuilder = inject(FormBuilder);
  mascotaForm = this.formBuilder.group({
    nombre: [''],
    duenio: [''],
    edad: [''],
        id: [null],
  });
  mascotas: any []= [];
mascotasService= inject(MascotaService);
constructor() {
    this.getMascotas();
  }
  getMascotas() {
    this.mascotasService.getMascotas().subscribe((data) => {
      this.mascotas = data;
    });
  }

  saveMascota() {
    if (this.mascotaForm.value.id === null) {
      this.mascotasService.addMascota(this.mascotaForm.value);
    }else {
      this.mascotasService.updateMascota(this.mascotaForm .value);
    }
 this.mascotaForm.reset();
  }


  deleteMascota(mascotaId: string) {
    this.mascotasService.deleteMascota(mascotaId);
  }
  actualizarMascota(mascota: any) {
    this.mascotaForm.patchValue(mascota);
  }
}
