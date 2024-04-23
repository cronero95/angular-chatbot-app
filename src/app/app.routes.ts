import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./business/business-layout.component'),
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
