import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'items',
    component: ItemComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'listing/:id',
    component: ItemDetailComponent
  },
  {
   path: 'admin',
   component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
