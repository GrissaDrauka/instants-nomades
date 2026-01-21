import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/home/home').then(m => m.Home),
    },
    // Le Trek - Programme (anciennement "Le Voyage")
    {
        path: 'le-trek/programme',
        loadComponent: () =>
            import('./components/le-voyage/le-voyage').then(m => m.LeVoyage),
    },
    // Le Trek - Activités (nouvelle page)
    {
        path: 'le-trek/activites',
        loadComponent: () =>
            import('./components/le-trek/activites/activites').then(m => m.Activites),
    },
    // Le Trek - Prochains Départs (nouvelle page)
    {
        path: 'le-trek/prochains-departs',
        loadComponent: () =>
            import('./components/le-trek/prochains-departs/prochains-departs').then(m => m.ProchainsDeparts),
    },
    // Le Trek - Équipements & Infos pratiques (nouvelle page)
    {
        path: 'le-trek/equipements',
        loadComponent: () =>
            import('./components/le-trek/equipements/equipements').then(m => m.Equipements),
    },
    // Qui suis-je (anciennement sous /rencontres)
    {
        path: 'qui-suis-je',
        loadComponent: () =>
            import('./components/rencontres/qui-suis-je/qui-suis-je').then(m => m.QuiSuisJe),
    },
    // Redirection pour l'ancienne URL
    {
        path: 'rencontres/qui-suis-je',
        redirectTo: 'qui-suis-je',
        pathMatch: 'full'
    },
    // Contact - Me contacter
    {
        path: 'contact',
        loadComponent: () =>
            import('./components/contact/contact').then(m => m.Contact),
    },
    // Contact - Tarifs & Informations (nouvelle page)
    {
        path: 'contact/tarifs',
        loadComponent: () =>
            import('./components/contact/tarifs/tarifs').then(m => m.Tarifs),
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
    },
    // Redirection ancienne URL le-voyage
    {
        path: 'le-voyage',
        redirectTo: 'le-trek/programme',
        pathMatch: 'full'
    }
];
