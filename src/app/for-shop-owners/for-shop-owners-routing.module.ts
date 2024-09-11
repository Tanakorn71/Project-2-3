import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForShopOwnersPage } from './for-shop-owners.page';

const routes: Routes = [
  {
    path: '',
    component: ForShopOwnersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForShopOwnersPageRoutingModule {}
