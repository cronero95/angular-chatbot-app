import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./business/business-layout.component'),
    children: [
      {
        path: '',
        title: 'Main Page',
        loadComponent: () => import('./business/pages/main-page/main-page.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
