import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'field',
    loadComponent: () => import('./business/business-layout.component'),
  },
  {
    path: '**',
    redirectTo: 'field',
  },
];
