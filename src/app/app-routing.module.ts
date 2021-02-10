import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { CardsComponent } from './pages/cards/cards.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/forms/forms.component';
import { PricingComponent } from './pages/pricing/pricing.component';


const routes: Routes = [
  {
    path:"header",
    component: HeaderComponent
  },
  {
    path:"footer",
    component: FooterComponent
  },
  {
    path:"menu",
    component: MenuComponent
  },
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"blocks",
    component: BlocksComponent
  },
  {
    path:"cards",
    component: CardsComponent
  },
  {
    path:"forms",
    component: FormsComponent
  },
  {
    path:"pricing",
    component: PricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
