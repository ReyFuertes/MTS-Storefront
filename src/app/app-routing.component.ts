import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  {
    path: '',
    canActivate: [],
    children: [
      {
        path: 'orders',
        loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
