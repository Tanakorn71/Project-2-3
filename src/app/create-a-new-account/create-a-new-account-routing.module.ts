import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateANewAccountPage } from './create-a-new-account.page';

const routes: Routes = [
  {
    path: '',
    component: CreateANewAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateANewAccountPageRoutingModule {}
