import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'field',
    loadComponent: () => import('./field/field.component'),
  },
  {
    path: '**',
    redirectTo: 'field',
  },
];
