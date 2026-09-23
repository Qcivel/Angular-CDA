import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        loadComponent:() => import('./pages/home/home').then(m=>m.Home)
    },
    {
        path:'about',
        loadComponent:() => import('./pages/about/about').then(m=>m.About)
    },
    {
        path:'contact',
        loadComponent:() => import('./pages/contact/contact').then(m=>m.Contact)
    },
    {
        path:'textInterpolation',
        loadComponent:() => import('./pages/text-interpolation/text-interpolation').then(m=>m.TextInterpolation)
    },
    {
        path:'attributeBinding',
        loadComponent:() => import('./pages/attribute-binding/attribute-binding').then(m=>m.AttributeBinding)
    },
    {
        path:'eventBinding',
        loadComponent:() => import('./pages/exercices/event-binding-exercice/event-binding-exercice').then(m=>m.EventBindingExercice)
    },
    {
        path:'directives',
        loadComponent:() => import('./pages/tp/directives/directives').then(m=>m.Directives)
    },
    {
        path:'componentCommunication',
        loadComponent:() => import('./pages/tp/component-communication/component-communication').then(m=>m.ComponentCommunication)
    },
    {
        path:'randomUser',
        loadComponent:() => import('./pages/api/random-user/random-user').then(m=>m.HttpApi)
    },
    {
        path:'observables',
        loadComponent:() => import('./pages/observables/observables').then(m=>m.Observables)
    },
    {
        path:'signals',
        loadComponent:() => import('./pages/signals/signals').then(m=>m.Signals)
    },
    
    {
        path:'**',
        loadComponent:() => import('./pages/not-found/not-found').then(m=>m.NotFound)
    },
];
