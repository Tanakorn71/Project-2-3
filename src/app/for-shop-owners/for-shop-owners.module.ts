import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForShopOwnersPageRoutingModule } from './for-shop-owners-routing.module';

import { ForShopOwnersPage } from './for-shop-owners.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForShopOwnersPageRoutingModule
  ],
  declarations: [ForShopOwnersPage]
})
export class ForShopOwnersPageModule {}
