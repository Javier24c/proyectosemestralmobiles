import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarberosPageRoutingModule } from './barberos-routing.module';

import { BarberosPage } from './barberos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarberosPageRoutingModule
  ],
  declarations: [BarberosPage]
})
export class BarberosPageModule {}
