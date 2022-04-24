import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    DragDropModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonModule,
    CdkAccordionModule,
    MatListModule,
    MatChipsModule,
    MatGridListModule,
  ]
})
export class MaterialsModule { }
