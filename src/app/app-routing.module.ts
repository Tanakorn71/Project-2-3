import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'for-shop-owners',
    loadChildren: () => import('./for-shop-owners/for-shop-owners.module').then( m => m.ForShopOwnersPageModule)
  },
  {
    path: 'for-customers',
    loadChildren: () => import('./for-customers/for-customers.module').then( m => m.ForCustomersPageModule)
  },
  {
    path: 'product-inventory',
    loadChildren: () => import('./product-inventory/product-inventory.module').then( m => m.ProductInventoryPageModule)
  },
  {
    path: 'product-price',
    loadChildren: () => import('./product-price/product-price.module').then( m => m.ProductPricePageModule)
  },
  {
    path: 'akkaraphon',
    loadChildren: () => import('./akkaraphon/akkaraphon.module').then( m => m.AkkaraphonPageModule)
  },
  {
    path: 'create-a-new-account',
    loadChildren: () => import('./create-a-new-account/create-a-new-account.module').then( m => m.CreateANewAccountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
