import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollectionContainerComponent } from './container/collection-container.component';
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
import { CollectionEffect } from './store/collection.effect';

const routes: Routes = [{
  path: '',
  component: CollectionContainerComponent,
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
    CollectionContainerComponent
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
    StoreModule.forFeature('collection', {}),
    EffectsModule.forFeature([CollectionEffect])
  ],
  exports: [],
  providers: [],
})
export class CollectionModule { }