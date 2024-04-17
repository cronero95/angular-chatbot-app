import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'field',
    loadComponent: () => import('./business/business.component'),
  },
  {
    path: '**',
    redirectTo: 'field',
  },
];
