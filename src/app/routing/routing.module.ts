import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from '../core/contact-us/contact-us.component';
import { HomeComponent } from '../core/home/home.component';
import { MenuComponent } from '../core/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent},
  { path: "contact-us", component: ContactUsComponent},
  { path: "menu", component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
