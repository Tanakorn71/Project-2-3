import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForCustomersPage } from './for-customers.page';

const routes: Routes = [
  {
    path: '',
    component: ForCustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForCustomersPageRoutingModule {}
