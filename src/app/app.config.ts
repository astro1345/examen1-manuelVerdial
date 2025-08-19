import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "examen1-4d185", appId: "1:664614788568:web:7f3c72adc19f170372a6ad", storageBucket: "examen1-4d185.firebasestorage.app", apiKey: "AIzaSyBzRYm7bQoaE-Fe3zPC9ZGrvQCOTdgws90", authDomain: "examen1-4d185.firebaseapp.com", messagingSenderId: "664614788568", measurementId: "G-BHQLQPW035" })), provideFirestore(() => getFirestore())
  ]
};
