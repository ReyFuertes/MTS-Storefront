import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticContainerComponent } from './container/analytic-container.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{
  path: '',
  component: AnalyticContainerComponent,
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
    AnalyticContainerComponent
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
export class AnalyticModule {}