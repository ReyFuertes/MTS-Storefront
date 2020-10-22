import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/order', pathMatch: 'full' },
  {
    path: '',
    canActivate: [],
    children: [
      {
        path: 'order',
        loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
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
