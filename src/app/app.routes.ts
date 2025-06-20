import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/home/home').then(m => m.Home),
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./components/contact/contact').then(m => m.Contact),
    },
];
