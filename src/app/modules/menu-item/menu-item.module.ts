import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemContainerComponent } from './container/menu-item-container.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MenuItemEffect } from './store/menu-item.effect';

const routes: Routes = [{
  path: '',
  component: MenuItemContainerComponent,
  children: []
}];

const materialModules = [
  MatTabsModule,
  MatListModule,
  MatButtonModule
];

const primengModules = [
  ButtonModule,
  InputSwitchModule,
];

@NgModule({
  declarations: [
    MenuItemContainerComponent
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
    StoreModule.forFeature('menuItem', {}),
    EffectsModule.forFeature([MenuItemEffect])
   ],
  exports: [],
  providers: [],
})
export class MenuItemModule {}