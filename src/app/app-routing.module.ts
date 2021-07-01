import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'single',
    loadChildren: () => import('./pages/single/single.module').then(m => m.SingleModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
