import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

const materialModules = [
  MatListModule
];

const primengModules = [
];

const sharedComponents = [
  SidebarComponent,
];


@NgModule({
  exports: [...sharedComponents],
  declarations: [...sharedComponents],
  imports: [
    ...materialModules,
    ...primengModules,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
})
export class SharedModule { }