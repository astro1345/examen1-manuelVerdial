import { Injectable, inject } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, updateDoc, doc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {
  firestore = inject(Firestore);

  getAutomoviles() {
    const automovilesCollection = collection(this.firestore, 'automoviles');
    return collectionData(automovilesCollection, { idField: 'id' });
  }
  addAutomovil(automovil: any) {
    const automovilesCollection = collection(this.firestore, 'automoviles');
    return addDoc(automovilesCollection, automovil);
  }
  updateAutomovil(automovil: any) {
    const automovilesCollection = collection(this.firestore, 'automoviles');
    const automovilDoc = doc(automovilesCollection, automovil.id);
    return updateDoc(automovilDoc, automovil);
  }

  deleteAutomovil(automovilId: string) {
    const automovilesCollection = collection(this.firestore, 'automoviles');
    const automovilDoc = doc(automovilesCollection, automovilId);
    return deleteDoc(automovilDoc);
  }
}
