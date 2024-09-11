import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForCustomersPageRoutingModule } from './for-customers-routing.module';

import { ForCustomersPage } from './for-customers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForCustomersPageRoutingModule
  ],
  declarations: [ForCustomersPage]
})
export class ForCustomersPageModule {}
