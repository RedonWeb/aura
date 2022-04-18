import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from '../materials/materials.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class NavigationModule { }
