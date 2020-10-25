import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  {
    path: '',
    canActivate: [],
    children: [{
      path: 'orders',
      loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
    }, {
      path: 'crokery',
      loadChildren: () => import('./modules/crokery/crokery.module').then(m => m.CrokeryModule)
    }, {
      path: 'deli-product',
      loadChildren: () => import('./modules/deli-product/deli-product.module').then(m => m.DeliProductModule)
    }, {
      path: 'menu-item',
      loadChildren: () => import('./modules/menu-item/menu-item.module').then(m => m.MenuItemModule)
    }, {
      path: 'analytic',
      loadChildren: () => import('./modules/analytic/analytic.module').then(m => m.AnalyticModule)
    }, {
      path: 'delivery',
      loadChildren: () => import('./modules/delivery/delivery.module').then(m => m.DeliveryModule)
    }, {
      path: 'collection',
      loadChildren: () => import('./modules/collection/collection.module').then(m => m.CollectionModule)
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
