import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from '../core/contact-us/contact-us.component';
import { HomeComponent } from '../core/home/home.component';
import { MenuComponent } from '../core/menu/menu.component';
import { ServiceComponent } from '../core/service/service.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '404', component: HomeComponent},
  {path: '*', redirectTo: '/home'},
  { path: "home", component: HomeComponent},
  { path: "contact-us", component: ContactUsComponent},
  { path: "menu", component: MenuComponent},
  { path: "service", component: ServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
