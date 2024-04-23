import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./business/business-layout.component'),
    children: [
      {
        path: '',
        title: 'Main Page',
        loadComponent: () => import(
          './business/pages/main-page/main-page.component'),
      },
      {
        path: 'football',
        title: 'Football Courts',
        loadComponent: () => import(
          './business/pages/football-page/football-page.component'),
      },
      {
        path: 'basketball',
        title: 'Basketball Courts',
        loadComponent: () => import(
          './business/pages/basketball-page/basketball-page.component'),
      },
      {
        path: 'voleyball',
        title: 'Voleyball Courts',
        loadComponent: () => import(
          './business/pages/voleyball-page/voleyball-page.component'),
      },
      {
        path: 'sandy-voleyball',
        title: 'Sandy Voleyball Courts',
        loadComponent: () => import(
          './business/pages/sandy-voleyball-page/sandy-voleyball-page.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
