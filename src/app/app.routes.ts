import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/home/home').then(m => m.Home)
    },
    {
        path: 'persona',
        loadComponent: () =>
            import('./components/persona/persona').then(m => m.Persona)
    },
    {
        path: 'mascota',
        loadComponent: () =>
            import('./components/mascota/mascota').then(m => m.Mascota)
    }
]
;
