import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersContainerComponent } from './container/orders-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

const materialModules = [
  MatTabsModule,
  MatListModule,
];

const primengModules = [
  ButtonModule,
  InputSwitchModule,
];

const routes: Routes = [
  {
    path: '',
    component: OrdersContainerComponent
  }
];

@NgModule({
  declarations: [
    OrdersContainerComponent
  ],
  imports: [
    ...materialModules,
    ...primengModules,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
   ],
  exports: [],
  providers: [],
})
export class OrdersModule {}
