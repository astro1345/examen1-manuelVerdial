import { inject, Injectable } from '@angular/core';
import { addDoc,collection, Firestore ,collectionData, updateDoc, doc, deleteDoc} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
    firestore = inject(Firestore);

  getPersonas() {
    const personasCollection = collection(this.firestore, 'personas');
    return collectionData (personasCollection, { idField: 'id' });
  }
  addPersona(persona: any) {
    const personasCollection = collection(this.firestore, 'personas');
    return addDoc(personasCollection, persona);
  }
  updatePersona(persona: any) {
    const personasCollection = collection(this.firestore, 'personas');
    const personaDoc = doc(personasCollection, persona.id);
    return updateDoc(personaDoc, persona);
  }

  deletePersonas(personaId: string) {
    const personasCollection = collection(this.firestore, 'personas');
    const personaDoc = doc(personasCollection, personaId);
    return deleteDoc(personaDoc);
  }
}
