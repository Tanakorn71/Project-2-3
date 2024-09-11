import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkkaraphonPageRoutingModule } from './akkaraphon-routing.module';

import { AkkaraphonPage } from './akkaraphon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkkaraphonPageRoutingModule
  ],
  declarations: [AkkaraphonPage]
})
export class AkkaraphonPageModule {}
