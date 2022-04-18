import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialsModule } from '../materials/materials.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceComponent } from './service/service.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    MenuComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
})
export class CoreModule { }
