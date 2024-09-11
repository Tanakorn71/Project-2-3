import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkkaraphonPage } from './akkaraphon.page';

const routes: Routes = [
  {
    path: '',
    component: AkkaraphonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkkaraphonPageRoutingModule {}
