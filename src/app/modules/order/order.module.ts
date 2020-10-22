import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderContainerComponent } from './container/order-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { OrderTabsComponent } from './components/order-tabs/order-tabs.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { OrderFilterComponent } from './components/order-filters/order-filters.component';

const materialModules = [
  MatTabsModule,
  MatListModule,
];

const primengModules = [
  ButtonModule,
  InputSwitchModule,
];

const routes: Routes = [{
  path: '',
  component: OrderContainerComponent,
  children: [{
    path: '',
    component: OrderPageComponent
  }]
}];

@NgModule({
  declarations: [
    OrderContainerComponent,
    OrderTabsComponent,
    OrderPageComponent,
    OrderFilterComponent
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
export class OrderModule { }
