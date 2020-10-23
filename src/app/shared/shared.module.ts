import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { TopNavComponent } from './components/topnav/topnav.component';
import { SfButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { SfSearchComponent } from './components/search/search.component';

const materialModules = [
  MatListModule,
  MatButtonModule
];

const primengModules = [
];

const sharedComponents = [
  SidebarComponent,
  TopNavComponent,
  SfButtonComponent,
  SfSearchComponent
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