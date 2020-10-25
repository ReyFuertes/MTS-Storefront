import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrokeryContainerComponent } from './container/crokery-container.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrokeryPageComponent } from './components/crokery-page/crokery-page.component';
import { CrokeryTabsComponent } from './components/crokery-tabs/crokery-tabs.component';
import { CrokeryFiltersComponent } from './components/crokery-filters/crokery-filters.component';

const routes: Routes = [{
  path: '',
  component: CrokeryContainerComponent,
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
    CrokeryContainerComponent,
    CrokeryPageComponent,
    CrokeryTabsComponent,
    CrokeryFiltersComponent
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
export class CrokeryModule {}