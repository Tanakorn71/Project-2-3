import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateANewAccountPageRoutingModule } from './create-a-new-account-routing.module';

import { CreateANewAccountPage } from './create-a-new-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateANewAccountPageRoutingModule
  ],
  declarations: [CreateANewAccountPage]
})
export class CreateANewAccountPageModule {}
