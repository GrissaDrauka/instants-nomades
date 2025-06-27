import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/home/home').then(m => m.Home),
    },
    {
        path: 'le-voyage',
        loadComponent: () =>
            import('./components/le-voyage/le-voyage').then(m => m.LeVoyage),
    },
    {
        path: 'accompagnants',
        loadComponent: () =>
            import('./components/accompagnants/accompagnants').then(m => m.Accompagnants),
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./components/contact/contact').then(m => m.Contact),
    },
];
