import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  { path: '**', redirectTo: 'template/one' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
