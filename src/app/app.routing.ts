import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
