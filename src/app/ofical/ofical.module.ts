import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OficalPageRoutingModule } from './ofical-routing.module';

import { OficalPage } from './ofical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OficalPageRoutingModule
  ],
  declarations: [OficalPage]
})
export class OficalPageModule {}
