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
        path: 'rencontres/qui-suis-je',
        loadComponent: () =>
            import('./components/rencontres/qui-suis-je/qui-suis-je').then(m => m.QuiSuisJe),
    },
    {
        path: 'rencontres/accompagnants',
        loadComponent: () =>
            import('./components/rencontres/accompagnants/accompagnants').then(m => m.Accompagnants),
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./components/contact/contact').then(m => m.Contact),
    },
    {
        path: 'merci',
        loadComponent: () =>
            import('./components/merci/merci').then(m => m.Merci),
    },
    {
        path: 'mentions-legales',
        loadComponent: () =>
            import('./components/mentions-legales/mentions-legales').then(m => m.MentionsLegales)
    }
];
