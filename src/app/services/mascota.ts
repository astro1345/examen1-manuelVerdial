import { Injectable, inject } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, updateDoc, doc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  firestore = inject(Firestore);

  getMascotas() {
    const mascotasCollection = collection(this.firestore, 'mascotas');
    return collectionData(mascotasCollection, { idField: 'id' });
  }
  addMascota(mascota: any) {
    const mascotasCollection = collection(this.firestore, 'mascotas');
    return addDoc(mascotasCollection, mascota);
  }
  updateMascota(mascota: any) {
    const mascotasCollection = collection(this.firestore, 'mascotas');
    const mascotaDoc = doc(mascotasCollection, mascota.id);
    return updateDoc(mascotaDoc, mascota);
  }

  deleteMascota(mascotaId: string) {
    const mascotasCollection = collection(this.firestore, 'mascotas');
    const mascotaDoc = doc(mascotasCollection, mascotaId);
    return deleteDoc(mascotaDoc);
  }
}
