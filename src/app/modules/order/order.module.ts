import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderContainerComponent } from './container/order-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { OrderTabsComponent } from './components/order-tabs/order-tabs.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { OrderFilterComponent } from './components/order-filters/order-filters.component';
import { OrderTodayComponent } from './components/order-today/order-today.component';
import { SharedModule } from 'src/app/shared/shared.module';

const materialModules = [
  MatTabsModule,
  MatListModule,
  MatButtonModule
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
    component: OrderPageComponent,
    children: [{
      path: 'new',
      component: OrderTodayComponent
    }]
  }]
}];

@NgModule({
  declarations: [
    OrderContainerComponent,
    OrderTabsComponent,
    OrderPageComponent,
    OrderFilterComponent,
    OrderTodayComponent
  ],
  imports: [
    ...materialModules,
    ...primengModules,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class OrderModule { }
